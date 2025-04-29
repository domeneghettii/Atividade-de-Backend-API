const editoraModel = require("../models/editoraModel");

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
        const newEditora = await editoraModel.createEditora(nome, pais_origem);
        res.status(201).json(newEditora);
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
        const updatedEditora = await editoraModel.updateEditora(req.params.id, nome, pais_origem);
        if (!updatedEditora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(updatedEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar editora." });
    }
};

module.exports = { getAllEditoras, getEditora, createEditora, deleteEditora, updateEditora };