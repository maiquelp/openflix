import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { Link } from 'react-router-dom';

const NewCategory = () => {
    return (
        <PageTemplate>
            <h1>Cadastro de Categoria</h1>
            <Link to="/newvideo">
                Cadastrar Vídeo
            </Link>
        </PageTemplate>
    )
}

export default NewCategory;