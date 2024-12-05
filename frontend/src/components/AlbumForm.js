import React, { useState } from 'react';

const AlbumForm = ({ onAddAlbum }) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAlbum = { title, artist, genre, release_date: releaseDate, rating: parseInt(rating) };
        onAddAlbum(newAlbum);
        setTitle('');
        setArtist('');
        setGenre('');
        setReleaseDate('');
        setRating('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Artista" value={artist} onChange={(e) => setArtist(e.target.value)} required />
            <input type="text" placeholder="Gênero" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
            <input type="number" placeholder="Nota (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} />
            <button type="submit">Adicionar Álbum</button>
        </form>
    );
};

export default AlbumForm;
