import {asyncHandler} from "../utils/AsyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {Product} from "../models/products.model.js"
import {UploadOnCloudinary} from "../utils/cloudinary.js"
import jwt from "jsonwebtoken";
import mongoose from "mongoose"

// Get all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        products,
        "Products fetched successfully"
      )
    );
});

// Get single product
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ id });

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        product,
        "Product fetched successfully"
      )
    );
});

// Create product
const createProduct = asyncHandler(async (req, res) => {

    console.log("Mudasir");
  const {
    image,
    name,
    rating,
    priceCents,
    keywords,
  } = req.body;

  if (!image || !name || !rating || priceCents === undefined) {
    throw new ApiError(400, "Required product fields are missing");
  }

  const existingProduct = await Product.findOne({ id });

  if (existingProduct) {
    throw new ApiError(409, "Product already exists");
  }

  const product = await Product.create({
    image,
    name,
    rating,
    priceCents,
    keywords,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        product,
        "Product created successfully"
      )
    );
});

// Update product
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOneAndUpdate(
    { id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        product,
        "Product updated successfully"
      )
    );
});

// Delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOneAndDelete({ id });

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        product,
        "Product deleted successfully"
      )
    );
});

export {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
