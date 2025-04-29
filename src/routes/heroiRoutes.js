import express from "express";
import upload from "./../config/upload.js";
import heroiController from "../controllers/heroiController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   nome: Herois
 *   description: Gerenciamento de herois
 */

/**
 * @swagger
 * /api/herois:
 *   get:
 *     summary: Lista todos os herois
 *     tags: [Herois]
 *     parameters:
 *       - in: query
 *         nome: nome
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de herois
 */
router.get("/herois", heroiController.getAllHerois);

/**
 * @swagger
 * /api/herois/{id}:
 *   get:
 *     summary: Busca heroi por ID
 *     tags: [Herois]
 *     parameters:
 *       - in: path
 *         nome: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Heroi encontrado
 *       404:
 *         description: Heroi não encontrado
 */
router.get("/herois/:id", heroiController.getHeroiById);

/**
 * @swagger
 * /api/herois:
 *   post:
 *     summary: Cria um novo heroi
 *     tags: [herois]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               editora_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Heroi criado
 */
router.post("/herois", upload.single("photo"), heroiController.createHeroi);

/**
 * @swagger
 * /api/herois/{id}:
 *   delete:
 *     summary: Deleta um heroi
 *     tags: [Herois]
 *     parameters:
 *       - in: path
 *         nome: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Heroi deletado
 */
router.delete("/herois/:id", heroiController.deleteHeroi);

/**
 * @swagger
 * /api/herois/{id}:
 *   put:
 *     summary: Atualiza um heroi
 *     tags: [Herois]
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
 *               editora_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Heroi atualizado
 */
router.put("/herois/:id", heroiController.updateHeroi);

module.exports = router;
