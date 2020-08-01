import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { Link } from 'react-router-dom';

const NewVideo = () => {
    return (
        <PageTemplate>
            <h1>Cadastro de Vídeo</h1>
            <Link to="/newcategory">
                Cadastrar Categoria
            </Link>
        </PageTemplate>
    )
}

export default NewVideo;