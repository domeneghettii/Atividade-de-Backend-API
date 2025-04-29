const houseModel = require("../models/editoraModel");

const getAllEditoras = async (req, res) => {
    try {
        const editoras = await editoraModel.getEditoras();
        res.json(editoras);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editoras." });
    }
};

const getEditora = async (req, res) => {
    try {
        const editora = await editoraModel.getEditoraById(req.params.id);
        if (!editora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(editora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editora." });
    }
};

const createEditora = async (req, res) => {
    try {
        const { nome, pais_origem } = req.body;
        const newPais_origem = await editoraModel.createEditora(nome, pais_origem);
        res.status(201).json(newPais_origem);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar a editora." });
    }
};

const deleteEditora = async (req, res) => {
    try {
        const message = await editoraModel.deleteEditora(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};

const updateEditora = async (req, res) => {
    try {
        const { nome, pais_origem } = req.body;
        const updateEditora = await editoraModel.updateEditora(req.params.id, nome, pais_origem);
        if (!updateEditora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(updateEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar editora." });
    }
};

module.exports = { getAllEditoras, getEditora, createEditora, deleteEditora, updateEditora };