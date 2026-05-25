const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "Not authorized, no token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (!req.user) return res.status(401).json({ message: "User no longer exists" });

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};

const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "You do not have permission to access this route" });
  }
  return next();
};

module.exports = { authorize, protect };
