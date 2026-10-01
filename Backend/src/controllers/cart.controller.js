import {asyncHandler} from "../utils/AsyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"
import {UploadOnCloudinary} from "../utils/cloudinary.js"
import jwt from "jsonwebtoken";
import mongoose from "mongoose"
import { CartItem } from "../models/cart.model.js";


// ==========================================
// ADD ITEM TO CART
// ==========================================

const addToCart = asyncHandler(async (req, res) => {
    const { productId, quantity, deliveryOptionId } = req.body;

    if (!productId || !quantity || !deliveryOptionId) {
        throw new ApiError(
            400,
            "productId, quantity and deliveryOptionId are required"
        );
    }

    if (quantity <= 0) {
        throw new ApiError(400, "Quantity must be greater than 0");
    }

    const existingCartItem = await CartItem.findOne({
        userId: req.user?._id,
        productId
    });

    let cartItem;

    if (existingCartItem) {
        // If product already exists, update it
        existingCartItem.quantity = quantity;
        existingCartItem.deliveryOptionId = deliveryOptionId;

        cartItem = await existingCartItem.save();
    } else {
        // Create new cart item
        cartItem = await CartItem.create({
            userId: req.user?._id,
            productId,
            quantity,
            deliveryOptionId
        });
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                cartItem,
                "Item added to cart successfully"
            )
        );
});


// ==========================================
// GET CURRENT USER CART
// ==========================================

const getCartItems = asyncHandler(async (req, res) => {
    console.log(req.user?._id);
    const cartItems = await CartItem.find({
        
        
        // userId: req.user?._id
    });

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                cartItems,
                "Cart items fetched successfully"
            )
        );
});


// ==========================================
// UPDATE CART ITEM
// ==========================================

const updateCartItem = asyncHandler(async (req, res) => {
    const { cartItemId } = req.params;
    const { quantity, deliveryOptionId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(cartItemId)) {
        throw new ApiError(400, "Invalid cart item id");
    }

    if (quantity !== undefined && quantity <= 0) {
        throw new ApiError(400, "Quantity must be greater than 0");
    }

    const cartItem = await CartItem.findOne({
        _id: cartItemId,
        userId: req.user?._id
    });

    if (!cartItem) {
        throw new ApiError(404, "Cart item not found");
    }

    if (quantity !== undefined) {
        cartItem.quantity = quantity;
    }

    if (deliveryOptionId !== undefined) {
        cartItem.deliveryOptionId = deliveryOptionId;
    }

    await cartItem.save();

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                cartItem,
                "Cart item updated successfully"
            )
        );
});


// ==========================================
// UPDATE QUANTITY ONLY
// ==========================================

const updateCartItemQuantity = asyncHandler(async (req, res) => {
    const { cartItemId } = req.params;
    const { quantity } = req.body;

    if (!mongoose.Types.ObjectId.isValid(cartItemId)) {
        throw new ApiError(400, "Invalid cart item id");
    }

    if (!quantity || quantity <= 0) {
        throw new ApiError(
            400,
            "Quantity must be greater than 0"
        );
    }

    const cartItem = await CartItem.findOneAndUpdate(
        {
            _id: cartItemId,
            userId: req.user?._id
        },
        {
            $set: {
                quantity
            }
        },
        {
            new: true,
            runValidators: true
        }
    );

    if (!cartItem) {
        throw new ApiError(404, "Cart item not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                cartItem,
                "Cart quantity updated successfully"
            )
        );
});


// ==========================================
// UPDATE DELIVERY OPTION
// ==========================================

const updateDeliveryOption = asyncHandler(async (req, res) => {
    const { cartItemId } = req.params;
    const { deliveryOptionId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(cartItemId)) {
        throw new ApiError(400, "Invalid cart item id");
    }

    if (!deliveryOptionId) {
        throw new ApiError(
            400,
            "Delivery option is required"
        );
    }

    const cartItem = await CartItem.findOneAndUpdate(
        {
            _id: cartItemId,
            userId: req.user?._id
        },
        {
            $set: {
                deliveryOptionId
            }
        },
        {
            new: true,
            runValidators: true
        }
    );

    if (!cartItem) {
        throw new ApiError(404, "Cart item not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                cartItem,
                "Delivery option updated successfully"
            )
        );
});


// ==========================================
// REMOVE SINGLE CART ITEM
// ==========================================

const removeCartItem = asyncHandler(async (req, res) => {
    const { cartItemId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(cartItemId)) {
        throw new ApiError(400, "Invalid cart item id");
    }

    const cartItem = await CartItem.findOneAndDelete({
        _id: cartItemId,
        userId: req.user?._id
    });

    if (!cartItem) {
        throw new ApiError(404, "Cart item not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                cartItem,
                "Cart item removed successfully"
            )
        );
});


// ==========================================
// CLEAR ENTIRE CART
// ==========================================

const clearCart = asyncHandler(async (req, res) => {
    const result = await CartItem.deleteMany({
        userId: req.user?._id
    });

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    deletedCount: result.deletedCount
                },
                "Cart cleared successfully"
            )
        );
});


// ==========================================
// EXPORT
// ==========================================

export {
    addToCart,
    getCartItems,
    updateCartItem,
    updateCartItemQuantity,
    updateDeliveryOption,
    removeCartItem,
    clearCart
};
