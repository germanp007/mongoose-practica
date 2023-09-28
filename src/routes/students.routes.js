import { Router } from "express";
import { studentsModel } from "../models/students.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const limit = +req.query.limit;

    if (!isNaN(limit)) {
      const studentsList = await studentsModel.find().limit(limit);
      res.json({ status: "success", data: studentsList });
    }

    const list = await studentsModel.find();
    res.json({ status: "success", data: list });
  } catch (error) {
    res.json({
      status: "error",
      message: "Lista de estudiantes no encontrada",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const studentData = req.body;
    if (
      !studentData.nombre ||
      !studentData.apellido ||
      !studentData.edad ||
      !studentData.curso ||
      !studentData.nota
    ) {
      return res.json("Debe llenar todos los campons");
    }
    const studentAdded = await studentsModel.create(studentData);
    res.json({ status: "success", data: studentAdded });
  } catch (error) {
    res.json({
      status: "error",
      message: "No se puede agregar estudiante",
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const studentData = req.body;

    const result = await studentsModel.updateOne({ _id: id }, studentData);
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({
      status: "error",
      message: "No se puede encontrar el estudiante",
    });
  }
});
router.delete("/:dni", async (req, res) => {
  try {
    const { dni } = req.params;
    const result = await studentsModel.deleteOne({ dni: dni });

    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({
      status: "error",
      message: "No se puede encontrar el estudiante",
    });
  }
});

export { router as studentsRouter };
