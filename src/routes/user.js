"use strict";
/* -------------------------------------------------------
    EXPRESSJS - DEFI Project
------------------------------------------------------- */
const router = require("express").Router();
const User = require("../controllers/user");
const permissions =require('../middlewares/permissions')

router.route("/").get(User.list)
router.route("/register").post(User.create)
router.route("/createuser").post(User.createUserByAdmin)
router.route("/forgotpass").post(User.forgotPass)
router.route("/updatepass").put(User.updatePassword)
router.route("/savedblog").post(User.saveBlog)

router.route("/:userId")
  .get( User.read)
  .put(User.update)
  .delete( User.delete);

  module.exports = router;
