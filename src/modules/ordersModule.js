import express from "express";

const ordersRouter = express.Router();

ordersRouter.post("/", (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

export default ordersRouter;
