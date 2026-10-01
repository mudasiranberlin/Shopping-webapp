import {Router} from "express"
import {upload} from "../middlewares/multer.middleware.js"
import {verifyjwt} from "../middlewares/auth.middleware.js"
const router = Router()
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

// router.route("/productadd").post(
//     upload.fields([
//         {
//             name:"image",
//             maxCount:1
//         }
//     ]),
//     getProducts)

// router.route("/product").post(addProduct)

// routes/product.routes.js


router.get("/product", getProducts);
router.get("/:id", getProduct);
router.post("/product", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router