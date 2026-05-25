const express = require("express");
const {
  forgotPassword,
  getAdminOverview,
  getProfile,
  login,
  logout,
  register,
  resetPassword,
  updateProfile,
} = require("../controllers/authController");
const { authorize, protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.get("/admin/overview", protect, authorize("admin"), getAdminOverview);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
