import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ status: "success", message: "listado de usuarios" });
});

export { router as usersRouter };
