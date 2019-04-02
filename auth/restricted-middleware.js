module.exports = (req, res, next) => {
  if(req && req.session && req.session.user) /* Always check wether you have the req.session on its own, or it could break your javascript. Just good practice. And req just in case express breaks. */ {
    next();
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};
