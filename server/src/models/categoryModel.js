import mongoose from "mongoose";
import { Schema } from "mongoose";
import slugify from 'slugify'

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);

categorySchema.pre('save', function () {
  if (this.name) {
    this.slug = slugify(this.name, {lower: true, strict: true});
  }
})

const Category = mongoose.model("Category", categorySchema);
export default Category;
