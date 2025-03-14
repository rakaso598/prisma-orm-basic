import express from "express";
import router from "./modules/indexModule.js";
import identify from "./middlewares/identifyMiddleware.js";

const app = express();
const PORT = 3013;

app.use(express.json());
app.use(identify);
app.use(router);

app.listen(PORT, () => {
  console.log(`${PORT} 서버 실행중!`);
});
