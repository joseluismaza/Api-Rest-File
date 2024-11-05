const mongoose = require("mongoose");
const comicsData = require("../data/data");
const Comic = require("../api/models/comics");

mongoose.connect(process.env.DB_URL).then(async () => {
  const allComics = await Comic.find();

  if (allComics.length, allLibrerias.length) {
    await Comic.collection.drop();
  }
})
  .catch((error) => console.log(`Error eliminando información: ${error}`)).then(async () => {
    await Comic.insertMany(comicsData);
  })
  .catch((error) => console.log(`Error creando inforamción: ${error}`)).finally(() => mongoose.disconnect());
