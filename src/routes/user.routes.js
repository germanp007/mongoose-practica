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

router.post("/", async (req, res) => {
  try {
    const userInfo = req.body;
    const user = await usersModel.create(userInfo);
    res.json({ status: "usuario creado exitosamente", data: user });
  } catch (error) {
    res.json({
      status: "error",
      message: "no se pudo crear el usuario",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let userToReplace = req.body;
    if (
      !userToReplace.first_name ||
      !userToReplace.last_name ||
      !userToReplace.email
    )
      return res.json({ status: "error", message: "incomplete values" });

    let result = await usersModel.updateOne({ _id: id }, userToReplace);
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "error", message: "el usuario no ha sido encontrado" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let deletedUser = await usersModel.deleteOne({ _id: id });
    res.json({ status: "success", message: deletedUser });
  } catch (error) {
    res.json({ status: "error", error: "el usuario no fue encontrado" });
  }
});

export { router as usersRouter };
