import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumForm from './components/AlbumForm';
import AlbumList from './components/AlbumList';
import SearchBar from './components/SearchBar';

const App = () => {
    const [searchResults, setSearchResults] = useState([]);

    // Função para carregar todos os álbuns
    const fetchAlbums = async () => {
        try {
            const response = await axios.get('/albums'); // Usando caminho relativo
            setSearchResults(response.data);
        } catch (error) {
            console.error('Erro ao buscar álbuns:', error);
        }
    };

    // Carregar os álbuns ao montar o componente
    useEffect(() => {
        fetchAlbums();
    }, []);

    // Função para adicionar um novo álbum
    const addAlbum = async (newAlbum) => {
        try {
            await axios.post('/albums', newAlbum); // Usando caminho relativo
            fetchAlbums();
        } catch (error) {
            console.error('Erro ao adicionar álbum:', error);
        }
    };

    // Função para deletar um álbum
    const deleteAlbum = async (id) => {
        try {
            await axios.delete(`/albums/${id}`); // Usando caminho relativo
            fetchAlbums();
        } catch (error) {
            console.error('Erro ao deletar álbum:', error);
        }
    };

    // Função para buscar álbuns
    const searchAlbums = async (field, value) => {
        try {
            const response = await axios.get(`/search?field=${field}&value=${value}`); // Usando caminho relativo
            setSearchResults(response.data);
        } catch (error) {
            console.error('Erro ao buscar álbuns:', error);
        }
    };

    return (
        <div className="App">
            <h1>Gerenciador de Álbuns de Rock</h1>
            <AlbumForm onAddAlbum={addAlbum} />
            <SearchBar onSearch={searchAlbums} />
            <AlbumList albums={searchResults} onDelete={deleteAlbum} />
        </div>
    );
};

export default App;
