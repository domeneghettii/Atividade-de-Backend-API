
const express = require("express");
const router = express.Router();;
const editoraController = require("../controllers/editoraController");
const apiKeyMiddleware = require("../config/apiKey");

router.get("/", editoraController.getAllEditoras);
router.post("/", editoraController.createEditora);
router.put("/:id", editoraController.updateEditora);
router.delete("/:id", editoraController.deleteEditora);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;    

