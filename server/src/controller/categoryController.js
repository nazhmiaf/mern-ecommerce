import asyncHandler from "../middlewares/asyncHandler.js";
import Category from "../models/categoryModel.js";

export const createCategory = asyncHandler ( async (req, res) => {
  const category = await Category.create(req.body);
  return res.status(201).json({
    message : "Category created successfully",
    data : category
  })
})

export const getCategories = asyncHandler ( async (req,res) => {
  const categories = await Category.find()
  return res.status(200).json({
    message : "Categories retrieved successfully",
    data : categories
  })
})

export const deleteCategory = asyncHandler (async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }
  return res.status(200).json({
    message: "Category deleted successfully",
  });
})