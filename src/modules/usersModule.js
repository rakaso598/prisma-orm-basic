import express from "express";
import prisma from "../db/client.js";
import adminOnly from "../middlewares/adminOnly.js";

const usersRouter = express.Router();

usersRouter.post("/sign-up", async (req, res, next) => {
  try {
    const data = req.body; // 리퀘스트바디의 데이터

    // 데이터를 받았으니 prisma로 뭘 해야함.
    // 프리즈마의. 유저에. 생성할게요. {리퀘스트바디의 데이터}
    const result = await prisma.user.create({ data });
    console.log(result);

    res.status(201).send("Created");
  } catch (e) {
    // 다음 미들웨어에 에러 넘기기 -> 마지막에 있는 에러처리미들웨어에 도달할 것
    next(e);
  }
});

usersRouter.post("/log-in", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 일단 해당 이메일에 유저가 있는지 확인
    const user = await prisma.user.findUnique({ where: { email } });
    // 얼리리턴. 안쓰면? send가 두번 나옴. 한개는 막아줘.
    if (!user) return res.status(404).send("그런 유저 없어요...");

    if (user.password !== password)
      return res.status(400).send("비밀번호가 잘못되었어요...");
    // Bad Request : 요청 자체가 잘못됨

    res.status(200).send("OK");
  } catch (e) {
    next(e);
  }
});

/**
 * 전체 유저 목록 불러오기
 */
usersRouter.get("/", adminOnly, async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      omit: { password: true },
      include: { favoriteProduct: true },
    });

    res.json(users);
  } catch (e) {
    next(e);
  }
});

export default usersRouter;
