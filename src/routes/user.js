"use strict";
/* -------------------------------------------------------
    EXPRESSJS - DEFI Project
------------------------------------------------------- */
const router = require("express").Router();
const User = require("../controllers/user");
const permissions =require('../middlewares/permissions')

router.route("/").get(permissions.isAdmin, User.list)
router.route("/register").post(User.create)

router.route("/:userId")
  .get(permissions.isOwn, User.read)
  .put(User.update)
  .delete( User.delete);

  module.exports = router;
