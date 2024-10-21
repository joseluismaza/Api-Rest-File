const cloudinary = require("cloudinary").v2;

const deleteFile = (url) => {

  const imgSplited = url.split("/");//separarlo por barras

  const folderName = imgSplited.at(-2);//.at recorre el array al revés
  const fileName = imgSplited.at(-1).split(".")[0];//separa el nombre de archivo de la extensión

  cloudinary.uploader.destroy(`${folderName}/${fileName}`, () => {
    console.log("Imagen eliminada");
  })

}

module.exports = { deleteFile }
