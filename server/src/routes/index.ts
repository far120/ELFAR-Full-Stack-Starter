import { Router } from "express";
import userRoutes from "../modules/users/user.routes";
import auditLogRoutes from "../modules/auditLog/auditLog.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/logs", auditLogRoutes);

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

export default router;