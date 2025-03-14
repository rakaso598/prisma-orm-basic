import express from "express";
import prisma from "../db/client.js";

const ordersRouter = express.Router();

ordersRouter.post("/", (req, res, next) => {
  try {
    const userEmail = "test@test.com";
    // 현재 로그인한 유저 정보가 필요 -> 누가요청하느냐?
    // 읽을때도 연결해서 읽기 , 생성할때도 연결해서 생성

    // 주문을 생성할 때, 주문에 포함될 주문 Item을 같이 생성하고, 그 녀석들에다가 바로 Product를 연결할 수도 있음.
    prisma.order.create({
      data: {
        userEmail,
        orderItem: {
          createMany: { data: [{ productId: 1 }, { productId: 2 }] },
        },
        // 오더아이템을 포함해서 돌려주세요 -> 반환부y
        include: {
          // 오더아이템은 프로덕트를 포함해서 돌려주세요 -> 반환부
          orderItem: { include: { product: true } },
        },
      },
    });

    res.json(order);
  } catch (e) {
    next(e);
  }
});

export default ordersRouter;
