const express = require("express");
const router = express.Router();
const editoraController = require("../controllers/editoraController");
// const apiKeyMiddleware = require("../config/apiKey"); // só se quiser proteger

router.get("/", editoraController.getAllEditoras);
router.get("/:id", editoraController.getEditora); // ← ESSA LINHA FALTAVA
router.post("/", editoraController.createEditora);
router.put("/:id", editoraController.updateEditora);
router.delete("/:id", editoraController.deleteEditora);

module.exports = router;
