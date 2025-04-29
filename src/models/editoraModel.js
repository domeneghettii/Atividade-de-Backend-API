const pool = require("../config/database");

const getAllEditoras = async () => {
    const result = await pool.query("SELECT * FROM editoras");
    return result.rows;
};


const getEditoraById = async (id) => {
    const result = await pool.query("SELECT * FROM editoras WHERE id = $1", [id]);
    return result.rows[0];
};

const createEditora = async (nome, pais_origem) => {
    const result = await pool.query(
        "INSERT INTO editoras (nome, pais_origem) VALUES ($1, $2) RETURNING *",
        [nome, pais_origem]
    );
    return result.rows[0];
};

const updateEditora = async (id, nome, pais_origem) => {
    const result = await pool.query(
        "UPDATE editoras SET nome = $1, pais_origem = $2 WHERE id = $3 RETURNING *",
        [nome, pais_origem, id]
    );
    if (result.rowCount === 0) {
        return { error: "Editora não encontrada!" };
    }
    return result.rows[0];
};


const deleteEditora = async (id) => {
    const result = await pool.query("DELETE FROM editoras WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Editora não encontrada!" };
    }
    return result.rows[0];
};

module.exports = { getAllEditoras, getEditoraById, createEditora, updateEditora, deleteEditora };