const pool = require("../config/database");

const getEditoras = async () => {
    try {
        const result = await pool.query("SELECT * FROM editoras");
        return result.rows;
    } catch (error) {
        throw new Error("Erro ao buscar editoras: " + error.message);
    }
};

const getEditoraById = async (id) => {
    try {
        const result = await pool.query(
            "SELECT * FROM editoras WHERE id = $1", [id]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error("Erro ao buscar editora: " + error.message);
    }
};

const createEditora = async (nome, pais_origem) => {
    try {
        const result = await pool.query(
            "INSERT INTO editoras (nome, pais_origem) VALUES ($1, $2) RETURNING *",
            [nome, pais_origem]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error("Erro ao criar a editora: " + error.message);
    }
};

const updateEditora = async (id, nome, pais_origem) => {
    try {
        const result = await pool.query(
            "UPDATE editoras SET nome = $1, pais_origem = $2 WHERE id = $3 RETURNING *",
            [nome, pais_origem, id]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error("Erro ao atualizar a editora: " + error.message);
    }
};

const deleteEditora = async (id) => {
    try {
        const result = await pool.query(
            "DELETE FROM editoras WHERE id = $1 RETURNING *", [id]
        );
        if (result.rowCount === 0) {
            return { error: "Editora não encontrada!" };
        }
        return { message: "Editora deletada com sucesso!" };
    } catch (error) {
        throw new Error("Erro ao deletar a editora: " + error.message);
    }
};

module.exports = { getEditoras, getEditoraById, createEditora, updateEditora, deleteEditora };
