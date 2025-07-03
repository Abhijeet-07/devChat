const AdminAuth = (req, res, next) => {
  const token = "xyzs";
  const isAdminUser = token === "xyz";
  if (isAdminUser) {
    console.log("helloss");
    res.status(200);
    res.send("hello34");
  } else {
    next();
  }
};

module.exports = { AdminAuth };
