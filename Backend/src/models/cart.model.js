import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        productId: {
            type: String,
            required: true,
            trim: true,
        },

        quantity: {
            type: Number,
            required: true,
            min: [1, "Quantity must be at least 1"],
            default: 1,
        },

        deliveryOptionId: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// Prevent the same product from appearing
// multiple times in one user's cart
cartItemSchema.index(
    {
        userId: 1,
        productId: 1,
    },
    {
        unique: true,
    }
);


export const CartItem = mongoose.model(
    "CartItem",
    cartItemSchema
);
