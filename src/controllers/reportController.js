const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");

const heroiModel = require("../models/heroiModel");

const exportHeroiPDF = async (req, res) => {
    try {
        const herois = await heroiModel.getHerois();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=herois.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatorio de Herois", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("ID | Nome | Poderes", {underline: "true"});
        doc.moveDown(0.5);

        //Add dados dos herois
        herois.forEach((heroi) => {
            doc.text(
                `${heroi.id} | ${heroi.nome} | ${heroi.poderes}`, {align: "center"}
            );
        });

        doc.end(); 
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF"}); 
    }
};

module.exports = { exportHeroiPDF };