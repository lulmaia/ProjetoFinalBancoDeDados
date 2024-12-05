import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [field, setField] = useState('title');
    const [value, setValue] = useState('');

    const handleSearch = () => {
        onSearch(field, value);
    };

    return (
        <div>
            <select value={field} onChange={(e) => setField(e.target.value)}>
                <option value="title">Título</option>
                <option value="artist">Artista</option>
                <option value="genre">Gênero</option>
            </select>
            <input type="text" placeholder="Valor de busca" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default SearchBar;
