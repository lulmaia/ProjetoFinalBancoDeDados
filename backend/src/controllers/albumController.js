// controllers/albumController.js
const db = require('../config/db');

// CRUD: Criar um álbum
const createAlbum = (req, res) => {
    const { title, artist, genre, release_date, rating } = req.body;
    db.query('INSERT INTO albums (title, artist, genre, release_date, rating) VALUES (?, ?, ?, ?, ?)',
        [title, artist, genre, release_date, rating],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: result.insertId, title, artist });
        });
};

// CRUD: Ler todos os álbuns
const getAllAlbums = (req, res) => {
    db.query('SELECT * FROM albums', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// CRUD: Atualizar um álbum
const updateAlbum = (req, res) => {
    const { id } = req.params;
    const { title, artist, genre, release_date, rating } = req.body;
    db.query('UPDATE albums SET title = ?, artist = ?, genre = ?, release_date = ?, rating = ? WHERE id = ?',
        [title, artist, genre, release_date, rating, id],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ id, title, artist });
        });
};

// CRUD: Deletar um álbum
const deleteAlbum = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM albums WHERE id = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(204).end();
    });
};

// Pesquisa Interativa: Relatório Personalizado
const searchAlbums = (req, res) => {
    const { field, value } = req.query;
    let query = 'SELECT * FROM albums WHERE ?? LIKE ?';
    db.query(query, [field, `%${value}%`], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

module.exports = {
    createAlbum,
    getAllAlbums,
    updateAlbum,
    deleteAlbum,
    searchAlbums
};
