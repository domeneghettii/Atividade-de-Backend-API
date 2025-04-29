const pool = require("../config/database");

const getAllHerois = async () => {
    const result = await pool.query(
        `SELECT herois.*, editoras.nome AS editora_nome
         FROM herois 
         LEFT JOIN editoras ON herois.editora_id = editoras.id`
    );
    return result.rows;
};

const getHeroiById = async (id) => {
    const result = await pool.query(
        `SELECT herois.*, editoras.name AS editora_nome 
         FROM herois
         LEFT JOIN editoras ON herois.editora_id = editoras.id 
         WHERE herois.id = $1`, [id] 
    );
    return result.rows[0];
};

//Atualizar para receber photo.
const createHeroi = async (nome, poder, editora_id, photo) => {
    const result = await pool.query(
        "INSERT INTO herois (nome, poder, editora_id) VALUES ($1, $2, $3) RETURNING *",
        [nome, poder, editora_id, photo]
    );
    return result.rows[0];
};

const updateHeroi = async (id, nome, poder, editora_id) => {
    const result = await pool.query(
        "UPDATE herois SET nome = $1, poder = $2, editora_id = $3 WHERE id = $4 RETURNING *",
        [nome, poder, editora_id, id]
    );
    if (result.rowCount === 0) {
        return { error: "Herói não encontrado!" };
    }
    return result.rows[0];
};

const deleteHeroi = async (id) => {
    const result = await pool.query("DELETE FROM herois WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Herói não encontrado!" };
    }
    return result.rows[0];
}

module.exports = { getAllHerois, getHeroiById, createHeroi, updateHeroi, deleteHeroi };