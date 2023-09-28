import mongoose from "mongoose";

const usersCollection = "users"; // nombre de la coleccion

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true, // Este campo debe ser obligatorio
  },
  last_name: String,
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true, // Debe ser unico y no repetirse
  },

  role: String,
});
//el modelo nos sirve para realizar operaciones sobre la coleccion users
export const usersModel = mongoose.model(usersCollection, userSchema); // primer parametro es el nombre
// de la coleccion y el segundo es el esquema que creamos
