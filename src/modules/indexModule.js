import express from "express";
import usersRouter from "./usersModule.js";
import productsRouter from "./productsModule.js";
import ordersRouter from "./ordersModule.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);

export default router;
