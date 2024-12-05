// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Importando as rotas
const albumRoutes = require('./routes/albumRoutes');

// Usando as rotas
app.use(albumRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
