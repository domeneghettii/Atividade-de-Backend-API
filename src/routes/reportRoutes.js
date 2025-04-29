const express = require("express");
const router = express.Router();

const reportController = require("./../controllers/reportController.js"); // importe o controller
const heroiController = require("./../controllers/heroiController.js"); // importe o controller
const apiKeyMiddleware = require("./../config/apiKey.js")


//Rota para o PDF
router.get("/report/pdf", reportController.exportWizardPDF);



router.use(apiKeyMiddleware);


module.exports = router;