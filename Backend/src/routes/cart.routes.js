import { Router } from "express";
import {verifyjwt} from "../middlewares/auth.middleware.js"

import {
    addToCart,
    getCartItems,
    updateCartItem,
    updateCartItemQuantity,
    updateDeliveryOption,
    removeCartItem,
    clearCart
} from "../controllers/cart.controller.js";

const router = Router();


// ==========================================
// CART ROUTES
// ==========================================

// Add item to cart
router
    .route("/cart-items")
    .post(verifyjwt, addToCart);

// Get current user's cart
router
    .route("/cart-items")
    .get( getCartItems);

// Update cart item
router
    .route("/cart-items/:cartItemId")
    .patch(verifyjwt, updateCartItem);

// Update quantity
router
    .route("/cart-items/:cartItemId/quantity")
    .patch(verifyjwt, updateCartItemQuantity);

// Update delivery option
router
    .route("/cart-items/:cartItemId/delivery-option")
    .patch(verifyjwt, updateDeliveryOption);

// Remove one item
router
    .route("/cart-items/:cartItemId")
    .delete(verifyjwt, removeCartItem);

// Clear entire cart
router
    .route("/cart-items")
    .delete(verifyjwt, clearCart);


export default router;

/*

Method	Endpoint	Purpose
POST	/api/v1/cart-items	Add item
GET	    /api/v1/cart-items	Get cart
PATCH	/api/v1/cart-items/:cartItemId	Update item
PATCH	/api/v1/cart-items/:cartItemId/quantity	Update quantity
PATCH	/api/v1/cart-items/:cartItemId/delivery-option	Update delivery
DELETE	/api/v1/cart-items/:cartItemId	Remove item
DELETE	/api/v1/cart-items	Clear cart

*/
