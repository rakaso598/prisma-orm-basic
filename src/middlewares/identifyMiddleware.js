function identify(req, res, next) {
  if (req.headers.authorization === "I am admin") {
    req.isAdmin = true;
  }

  next();
}

export default identify;
