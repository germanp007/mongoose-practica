import { Router } from "express";
import { usersModel } from "../models/users.model.js";

const router = Router();
usersModel;
router.get("/", async (req, res) => {
  try {
    const users = await usersModel.find();
    res.json({ status: "success", data: users });
  } catch (error) {
    res.json({
      status: "error",
      message: "no se pudo obtener el listado de usuarios",
    });
  }
});

export { router as usersRouter };
