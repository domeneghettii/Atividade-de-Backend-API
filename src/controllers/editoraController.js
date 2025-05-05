const editoraModel = require("../models/editoraModel");

const getAllEditoras = async (req, res) => {
    try {
        const editoras = await editoraModel.getEditoras();
        res.json(editoras);
    } catch (error) {
        console.error("Erro ao buscar editoras:", error);
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
        console.error("Erro ao buscar editora:", error);
        res.status(500).json({ message: "Erro ao buscar editora." });
    }
};

const createEditora = async (req, res) => {
    try {
        const { nome, pais_origem } = req.body;
        const novaEditora = await editoraModel.createEditora(nome, pais_origem);
        res.status(201).json(novaEditora);
    } catch (error) {
        console.error("Erro ao criar a editora:", error);
        res.status(500).json({ message: "Erro ao criar a editora." });
    }
};

const deleteEditora = async (req, res) => {
    try {
        const message = await editoraModel.deleteEditora(req.params.id);
        if (message.error) {
            return res.status(404).json({ message: message.error });
        }
        res.json(message);
    } catch (error) {
        console.error("Erro ao deletar editora:", error);
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};

const updateEditora = async (req, res) => {
    try {
        const { nome, pais_origem } = req.body;
        const editoraAtualizada = await editoraModel.updateEditora(req.params.id, nome, pais_origem);
        if (!editoraAtualizada) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(editoraAtualizada);
    } catch (error) {
        console.error("Erro ao atualizar editora:", error);
        res.status(500).json({ message: "Erro ao atualizar editora." });
    }
};

module.exports = { getAllEditoras, getEditora, createEditora, deleteEditora, updateEditora };