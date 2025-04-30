const express = require("express");
const router = express.Router();
const heroiController = require("../controllers/heroiController.js"); // Corrigido para usar o nome correto
const upload = require("../config/upload.js"); // Importação do middleware de upload
const apiKeyMiddleware = require("../config/apiKey");

// Rota para criar herói com upload de foto
router.post("/herois", upload.single("photo"), heroiController.createHeroi);

router.get("/", heroiController.getAllHerois);
router.get("/:id", heroiController.getHeroi);
router.post("/", upload.single("photo"), heroiController.createHeroi);
router.put("/:id", heroiController.updateHeroi);
router.delete("/:id", heroiController.deleteHeroi);

module.exports = router;