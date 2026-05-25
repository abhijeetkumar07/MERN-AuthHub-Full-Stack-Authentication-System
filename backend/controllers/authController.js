const crypto = require("crypto");
const User = require("../models/User");
const { cookieOptions, generateToken } = require("../utils/generateToken");

const sendAuthResponse = (res, statusCode, user) => {
  const token = generateToken(user._id);
  res.cookie("token", token, cookieOptions());
  return res.status(statusCode).json({ user, token });
};

const register = async (req, res, next) => {
  try {
    const { name, email, password, avatar } = req.body;
    const user = await User.create({ name, email, password, avatar });
    return sendAuthResponse(res, 201, user);
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return sendAuthResponse(res, 200, user);
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res) => {
  res.clearCookie("token", cookieOptions());
  return res.json({ message: "Logged out successfully" });
};

const getProfile = (req, res) => {
  res.json({ user: req.user });
};

const updateProfile = async (req, res, next) => {
  try {
    const allowed = ["name", "avatar"];
    allowed.forEach((field) => {
      if (req.body[field] !== undefined) req.user[field] = req.body[field];
    });
    await req.user.save();
    return res.json({ user: req.user });
  } catch (error) {
    return next(error);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "No user found with that email" });

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${process.env.CLIENT_URL || "http://localhost:3000"}/reset-password/${resetToken}`;
    return res.json({
      message: "Password reset token generated. Connect an email service in production.",
      resetUrl: process.env.NODE_ENV === "production" ? undefined : resetUrl,
    });
  } catch (error) {
    return next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    }).select("+password");

    if (!user) return res.status(400).json({ message: "Invalid or expired reset token" });

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    return res.json({ message: "Password reset successful" });
  } catch (error) {
    return next(error);
  }
};

const getAdminOverview = (req, res) => {
  res.json({
    metrics: {
      protectedRequests: 24800,
      activeIdentities: 1284,
      tokenRefreshes: 6910,
      riskScore: "0.7%",
    },
    message: "Admin overview loaded",
  });
};

module.exports = {
  forgotPassword,
  getAdminOverview,
  getProfile,
  login,
  logout,
  register,
  resetPassword,
  updateProfile,
};
