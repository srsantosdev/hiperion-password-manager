const routes = require("express").Router();

const UserController = require("./../controllers/UserController");
const SessionController = require("./../controllers/SessionController");
const ProfileController = require("./../controllers/ProfileController");
const PasswordController = require("./../controllers/PasswordController");

routes.post("/session", SessionController);

routes.get("/user", UserController.index);
routes.post("/user/create", UserController.create);
routes.put("/user/update/:id", UserController.update);

routes.get("/profile/:id", ProfileController.index);

routes.post("/password/create", PasswordController.create);
routes.delete("/password/:id", PasswordController.delete);

module.exports = routes;
