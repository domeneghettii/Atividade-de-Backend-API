// filepath: c:\Users\Aluno DS\Documents\GitHub\Atividade-de-Backend-API\src\controllers\heroiController.js
const heroiModel = require("../models/heroiModel");

const getHerois = async (req, res) => {
    try {
        const herois = await heroiModel.getAllHerois();
        res.json(herois);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar heróis." });
    }
};

const getHeroiById = async (req, res) => {
    try {
        const heroi = await heroiModel.getHeroiById(req.params.id);
        if (!heroi) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.json(heroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar herói." });
    }
};

const exportHeroiPDF = async (req, res) => {
    res.json({ message: "Exportando relatório em PDF do herói." });
};

const createHeroi = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const photo = req.file ? req.file.path : null;
        const newHeroi = await heroiModel.createHeroi(name, house_id, photo);
        res.status(201).json(newHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar herói." });
    }
};

const updateHeroi = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const updatedHeroi = await heroiModel.updateHeroi(req.params.id, name, house_id);
        if (!updatedHeroi) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.json(updatedHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar herói." });
    }
};

const deleteHeroi = async (req, res) => {
    try {
        const message = await heroiModel.deleteHeroi(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar herói." });
    }
};

module.exports = { getHerois, getHeroiById, exportHeroiPDF, createHeroi, updateHeroi, deleteHeroi };