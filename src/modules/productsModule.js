import express from "express";
import prisma from "../db/client.js";
import adminOnly from "../middlewares/adminOnly.js";

const productRouter = express.Router();

/**
 * 상품 생성
 */
// 여기 adminOnly 미들웨어 추가됨.
productRouter.post("/", adminOnly, async (req, res, next) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) throw new Error("필수 정보가 빠졌습니다.");

    // 뭔가 해야지 데이터 받았으면.
    const product = await prisma.product.create({ data: { name, price } });

    // res.send(JSON.stringify(product)); // 문자열화
    res.json(product); // 미리 준비된 .json() 사용
  } catch (e) {
    next(e);
  }
});

/**
 * 상품 목록 조회 .findMany()
 */
productRouter.get("/", async (req, res, next) => {
  try {
    // DB 작업은 비동기작업이므로 await-async 사용한다.
    const products = await prisma.product.findMany();

    res.json(products);
  } catch (e) {
    next(e);
  }
});

/**
 * 상품 하나만 조회 .findUnique()
 */
productRouter.get("/:id", async (req, res, next) => {
  try {
    // DB 작업은 비동기작업이므로 await-async 사용한다.
    // 파라미터에서 productId 값을 가져옴. (그리고 넘버로 형변환)
    const productId = Number(req.params.id);
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    res.json(product);
  } catch (e) {
    next(e);
  }
});

export default productRouter;
