import express from "express";
import usersRouter from "./usersModule.js";
import productsRouter from "./productsModule.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/products", productsRouter);

export default router;
