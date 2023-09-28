import mongoose from "mongoose";

export const connectDB = async () => {
  // se hace de manera asyncrona
  try {
    await mongoose.connect(
      "mongodb+srv://germanp007:nati23032023@clustergap.ggconiz.mongodb.net/usuariosDB?retryWrites=true&w=majority"
    );
    console.log("Conectado a la DB correctamente");
  } catch (error) {
    console.log("hubo un error al conectar la DB" + error.message);
  }
};
