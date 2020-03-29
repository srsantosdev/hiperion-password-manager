const routes = require("express").Router();
const UserController = require("./../controllers/UserController");

routes.post("/user/create", UserController.create);
routes.put("/user/update/:id", UserController.update);
routes.get("/user", UserController.index);

module.exports = routes;
