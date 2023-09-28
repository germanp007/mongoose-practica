import express from "express";
import { usersRouter } from "./routes/user.routes.js";
import { studentsRouter } from "./routes/students.routes.js";
import { connectDB } from "./config/dbConection.js";

const server = express();
const port = 8080;

server.use(express.json());

server.listen(port, () => console.log(`Servidor en puerto ${port}`));

// Conexion a la DB

connectDB();

server.use("/api/users", usersRouter);
server.use("/api/students", studentsRouter);
