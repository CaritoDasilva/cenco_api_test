const UserController = require("../controllers/users.controller");
const StoreController = require("../controllers/stores.controllers");
module.exports = app => {
    app.get("/api/credits/users", UserController.findAllUsers);
    app.get("/api/credit/users/:id", UserController.findUserById);
    app.get("/api/credits/stores", StoreController.getCreditsAllStores);
    app.get("/api/credits/stores/:store", StoreController.getCreditsByStore);
    app.post("/api/credits/new", UserController.createNewUser);
    app.put("/api/credits/user", UserController.getCreditsUser)
};