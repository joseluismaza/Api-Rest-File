const comicsRouter = require("./comics");
const libreriaRouter = require("./librerias");
const usersRoutes = require("./users");
const mainRouter = require("express").Router();

mainRouter.use("/comics", comicsRouter);
mainRouter.use("/librerias", libreriaRouter);
mainRouter.use("/users", usersRoutes);

module.exports = mainRouter;