const heroiModel = require("../models/heroiModel");


const getAllHerois = async (req, res) => {
    try {
        const herois = await heroiModel.getHerois();
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
        const { nome, poder, editora_id } = req.body;
        const photo = req.file ? req.file.filename : null; // Nome do arquivo salvo
        const novoHeroi = await heroiModel.createHeroi(nome, poder, editora_id, photo);
        res.status(201).json(novoHeroi);
    } catch (error) {
        console.error("Erro ao criar herói:", error);
        res.status(500).json({ message: "Erro ao criar herói." });
    }
};

const updateHeroi = async (req, res) => {
    try {
        const { nome, pais_origem } = req.body;
        const updateHeroi = await heroiModel.updateHeroi(req.params.id, nome, poder, editora_id);
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