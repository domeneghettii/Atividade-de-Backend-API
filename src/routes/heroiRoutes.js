const express = require("express");
const router = express.Router();
const heroiController = require("../controllers/heroiController.js"); // Corrigido para usar o nome correto
const upload = require("../config/upload.js"); // Importação do middleware de upload

// Rotas para heróis
router.get("/herois", heroiController.getHerois);
router.get("/herois/:id", heroiController.getHeroiById);
router.get("/herois/:id/relatorio", heroiController.exportHeroiPDF); // Rota para exportar PDF

// Rota para criar herói com upload de foto
router.post("/herois", upload.single("photo"), heroiController.createHeroi);

// Rotas para atualizar e deletar heróis
router.put("/herois/:id", heroiController.updateHeroi);
router.delete("/herois/:id", heroiController.deleteHeroi);

module.exports = router;