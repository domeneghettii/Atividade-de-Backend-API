const heroiModel = require("../models/heroiModel");

const getAllHerois = async (req, res) => {
    try {
        const herois = await heroiModel.getAllHerois();
        res.json(herois);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxos." });
    }
};

const getHeroi = async (req, res) => {
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

const createHeroi = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const photo = req.file ? req.file.path : null; // Verifica se a imagem foi enviada
        const newHeroi = await wizardModel.createHeroi(name, house_id, photo);

        res.status(201).json(newHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar herói." });
    }
};

const deleteHeroi = async (req, res) => {
    try {
        const message = await wizardModel.deleteHeroi(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar herói." });
    }
};

const updateHeroi = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const updateHeroi = await heroiModel.updateHeroi(req.params.id, name, house_id);
        if (!updateHeroi) {
            return res.status(404).json({ message: "bruxo não encontrado." });
        }
        res.json(updateHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar herói." });
    }
};

module.exports = { getAllHerois, getHeroi, createHeroi, deleteHeroi, updateHeroi };