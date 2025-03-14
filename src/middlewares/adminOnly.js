function adminOnly(req, res, next) {
  // 얼리리턴 : 안되는 케이스 미리 제외해두는 작성패턴(편함!)
  if (!req.isAdmin) return next(new Error("에러 : 관리자 아닌데 요청함."));

  next();
}

export default adminOnly;
