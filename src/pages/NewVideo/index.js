import React, { useState, useEffect } from 'react';
import PageTemplate from '../../components/PageTemplate';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import videosRepository from '../../repositories/videos'
import categoriesRepository from '../../repositories/categories'

const NewVideo = () => {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const categoryTitles = categories.map(({name}) => name );

    const { newValues, handleChange} = useForm({
        title: 'teste',
        url: 'https://www.youtube.com/watch?v=1myRO4ao6nA',
        categoryId: 'Front End'
    });

    useEffect(() => {
        categoriesRepository
            .getAll()
                .then((categories) => {
                    setCategories(categories);
                });
    }, []);

    const handleSubmit = (data) => {
        data.preventDefault();

        const selectedCategory = categories.find(element => element.name === newValues.category);

        videosRepository.create({
            title: newValues.title,
            url: newValues.url,
            categoryId: selectedCategory.id
        })
        .then(() => {

            history.push('/');
        });
    }

    return (
        <PageTemplate>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={handleSubmit}>

                <FormField 
                    label="Título:" 
                    type="text" 
                    name="title" 
                    value={newValues.title} 
                    onChange={handleChange}                     
                    suggestions />


                <FormField 
                    label="URL:" 
                    type="text" 
                    name="url" 
                    value={newValues.url} 
                    onChange={handleChange}                    
                    suggestions />

               
                <FormField 
                    label="Categoria:" 
                    type="text" 
                    name="category" 
                    value={newValues.category} 
                    onChange={handleChange} 
                    suggestions={categoryTitles} />

                <Button>Cadastrar</Button>
            </form>

            <Link to="/newcategory">
                Cadastrar Categoria
            </Link>
        </PageTemplate>
    )
}

export default NewVideo;