const heroiModel = require("../models/heroiModel");


const getAllHerois = async (req, res) => {
    try {
        const herois = await heroiModel.getHeroi();
        res.json(herois);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar heróis." });
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
        const { nome, pais_origem } = req.body;
        const photo = req.file ? req.file.path : null; // Verifica se a imagem foi enviada
        const newHeroi = await heroiModel.createHeroi(nome, pais_origem, photo);
        res.status(201).json(newHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar herói." });
    }
};

const updateHeroi = async (req, res) => {
    try {
        const { nome, pais_origem } = req.body;
        const updateHeroi = await heroiModel.updateHeroi(req.params.id, nome, pais_origem);
        if (!updateHeroi) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.json(updateHeroi);
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



module.exports = { getAllHerois, getHeroi, createHeroi, updateHeroi, deleteHeroi };