const express = require('express');
const app = express();
const heroiRoutes = require('./src/routes/heroiRoutes'); // Caminho corrigido
const editoraRoutes = require('./src/routes/editoraRoutes'); // Caminho corrigido
const setupSwagger = require('./src/config/swagger'); // Swagger aqui

app.use(express.json());
setupSwagger(app); // Ativa o Swagger

// Prefixo /api para as rotas
app.use('/api', heroiRoutes);
app.use('/api', editoraRoutes);

app.listen(3030, () => {
  console.log('Servidor rodando na porta 3030');
});