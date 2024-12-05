import React from 'react';

const AlbumList = ({ albums, onDelete }) => {
    return (
        <ul>
            {albums.map((album) => (
                <li key={album.id}>
                    <strong>{album.title}</strong> por {album.artist} ({album.genre}) - {album.release_date}
                    <button onClick={() => onDelete(album.id)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
};

export default AlbumList;
