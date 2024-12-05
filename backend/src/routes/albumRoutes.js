// routes/albumRoutes.js
const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

// CRUD: Criar um álbum
router.post('/albums', albumController.createAlbum);

// CRUD: Ler todos os álbuns
router.get('/albums', albumController.getAllAlbums);

// CRUD: Atualizar um álbum
router.put('/albums/:id', albumController.updateAlbum);

// CRUD: Deletar um álbum
router.delete('/albums/:id', albumController.deleteAlbum);

// Pesquisa Interativa: Relatório Personalizado
router.get('/search', albumController.searchAlbums);

module.exports = router;
