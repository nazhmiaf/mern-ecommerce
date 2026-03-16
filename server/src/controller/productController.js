import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";
import stremifier from "streamifier";

export const createProduct = asyncHandler(async (req, res) => {
  const products = await Product.create(req.body);
  return res.status(201).json({
    message: "Product created successfully",
    data: products,
  });
});

export const getProducts = asyncHandler(async (req, res) => {
  const queryObject = { ...req.query };

  const excludeField = ["page", "limit", "sort"];
  excludeField.forEach((el) => delete queryObject[el]);

  let sortOptions = {createdAt : -1};

  if (req.query.sort) {
    if (req.query.sort === "price-asc") {
      sortOptions = { price: 1 };
    }
    if (req.query.sort === "price-desc") {
      sortOptions = { price: -1 };
    }
    if (req.query.sort === "sold") {
      sortOptions = { sold: -1 };
    }
    if (req.query.sort === "newest") {
      sortOptions = { createdAt: -1 };
    }
  }

  let query;

  if (req.query.name) {
    query = Product.find({
      name: { $regex: req.query.name, $options: "i" },
    });
  } else {
    query = Product.find(queryObject);
  }

  const page = req.query.page * 1 || 1;
  const limitData = req.query.limit * 1 || 80;
  const skipData = (page - 1) * limitData;

  query = query.sort(sortOptions).skip(skipData).limit(limitData);

  let countProduct = await Product.countDocuments(queryObject);

  if (req.query.page) {
    if (skipData >= countProduct) {
      res.status(404);
      throw new Error("Page not found");
    }
  }

  const products = await query;
  const totalPages = Math.ceil(countProduct / limitData)

  return res.status(200).json({
    message: "Products fetched successfully",
    data: products,
    pagination : {
      totalPages,
      page,
      totalProducts : countProduct
    }
  });
});

export const detailProduct = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const product = await Product.findById(paramsId);

  if (!product) {
    return res.status(404);
    throw new Error("Product not found");
  }

  return res.status(200).json({
    message: "Product detail fetched successfully",
    data: product,
  });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const paramId = req.params.id;
  const updateProduct = await Product.findByIdAndUpdate(paramId, req.body, {
    runValidators: false,
    new: true,
  });

  return res.status(200).json({
    message: "Product updated successfully",
    data: updateProduct,
  });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const paramId = req.params.id;
  await Product.findByIdAndDelete(paramId);

  return res.status(200).json({
    message: "Product deleted successfully",
  });
});

export const FileUpload = asyncHandler(async (req, res) => {
  const stream = cloudinary.uploader.upload_stream(
    {
      folder: "uploads",
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
    },
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "File upload failed",
          error: err
        });
      }

      res.json({
        message: "File uploaded successfully",
        url: result.secure_url
      })
    },
  );
  stremifier.createReadStream(req.file.buffer).pipe(stream)
});

export const getPopularProducts = asyncHandler(async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 12;
    const products  = await Product.find().sort({sold : -1}).limit(limit)

    res.status(200).json({
      message: "Popular products fetched successfully",
      data: products
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch popular products",
      error: error.message
    })
  }
})
