const express = require("express");
//const cors = require("cors"); //conexion con el frontend
require("dotenv").config();
const { connectDB } = require("./src/config/db");
const mainRouter = require("./src/api/routes/main");
const cloudinary = require("cloudinary").v2;

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});


//app.use(cors());
app.use(express.json());

connectDB();
//rutas de acceso
app.use("/api/v1", mainRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Ruta no encontrada")
});

// levantar servidor
app.listen(3000, () => {
  console.log("Servidor levantado: http://localhost:3000");
});