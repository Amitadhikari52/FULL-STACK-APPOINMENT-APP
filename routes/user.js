const express = require("express");
const user_controller = require("../controllers/user");

const router = express.Router();

router.post("/post_user", user_controller.addUser);
router.get("/get_user", user_controller.getUser);
router.delete("/delete_user/:id", user_controller.deleteUser);

module.exports = router;
