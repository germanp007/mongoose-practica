import mongoose from "mongoose";

const studentsCollection = "colegio";

const studentsSquema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  cursos: {
    type:String,
    required: true,
    enum: ['fisica','matematicas','quimica', 'biologia']
  },
  nota: {
    type: Number,
    required: true,
  },
});

export const studentsModel = mongoose.model(studentsCollection, studentsSquema);
