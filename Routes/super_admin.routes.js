const express = require("express");
const router = express.Router();

const superAdminController = require("../Controller/super_admin.Controller.js");

const auth = require("../Middleware/authMiddeware.js");
const allowRoles = require("../Middleware/roleMiddleware.js");

router.post("/superAdmin/create", superAdminController.createSuperAdmin);
router.post("/api/admins", auth, allowRoles("super_admin"), superAdminController.registerAdmin);
router.get("/api/admins", auth, allowRoles("super_admin"), superAdminController.adminList);
router.delete("/api/admins/:id", auth, allowRoles("super_admin"), superAdminController.deleteAdmin);

module.exports = router;

