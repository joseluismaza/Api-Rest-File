const mongoose = require("mongoose");

const libreriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
  localidad: { type: String, required: true },
  comics: [{ type: mongoose.Types.ObjectId, ref: "comics", required: false }]
}, {
  timestamps: true,
  collection: "librerias",
});

const Libreria = mongoose.model("Libreria", libreriaSchema, "librerias");
module.exports = Libreria;
