
const express = require("express");
const router = express.Router();;
const editoraController = require("../controllers/editoraController");

/**
 * @swagger
 * tags:
 *   nome: Editoras
 *   description: Gerenciamento de editoras
 */

/**
 * @swagger
 * /api/editoras:
 *   get:
 *     summary: Lista todas as editoras
 *     tags: [Editoras]
 *     responses:
 *       200:
 *         description: Lista de editoras
 */
router.get("/editoras", editoraController.getAllEditoras);

/**
 * @swagger
 * /api/editoras/{id}:
 *   get:
 *     summary: Busca editora por ID
 *     tags: [Editoras]
 *     parameters:
 *       - in: path
 *         nome: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora encontrada
 *       404:
 *         description: Editora não encontrada
 */
router.get("/editoras/:id", editoraController.getEditora);

/**
 * @swagger
 * /api/editoras:
 *   post:
 *     summary: Cria uma nova editora
 *     tags: [Editoras]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       201:
 *         description: Editora criada
 */
router.post("/editoras", editoraController.createEditora);

/**
 * @swagger
 * /api/editoras/{id}:
 *   delete:
 *     summary: Deleta uma editora
 *     tags: [Editoras]
 *     parameters:
 *       - in: path
 *         nome: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora deletada
 */
router.delete("/editoras/:id", editoraController.deleteEditora);

/**
 * @swagger
 * /api/editoras/{id}:
 *   put:
 *     summary: Atualiza uma Editora
 *     tags: [Editoras]
 *     parameters:
 *       - in: path
 *         nome: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       200:
 *         description: Editora atualizada
 */
router.put("/editoras/:id", editoraController.updateEditora);

module.exports = router;
