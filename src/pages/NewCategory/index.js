import React, { useState, useEffect } from 'react';
import PageTemplate from '../../components/PageTemplate';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm'

const NewCategory = () => {
    const initialValues = {
        name: '',
        description: '',
        color: '#000000',
    };

    const {newValues, handleChange, clearValues} = useForm(initialValues);

    const [categories, setCategories] = useState([]);
    
    const handleSubmit = (data) => {
        data.preventDefault();
        setCategories([
            ...categories, newValues
        ]);

        clearValues();
    }


    useEffect(() => {
        fetch('http://localhost:3333/categorys')
            .then( async (res) => {
                const response = await res.json();
                setCategories([
                    ...response
                ]);
            })
    }, []);

    return (
        <PageTemplate>
            <h1>Cadastro de Categoria</h1>
            <form onSubmit={handleSubmit}>

                <FormField 
                    label="Nome:" 
                    type="text" 
                    name="name" 
                    value={newValues.name} 
                    onChange={handleChange}
                    suggestions />

                <FormField 
                    label="Descrição:" 
                    type="textarea" 
                    name="description" 
                    value={newValues.description} 
                    onChange={handleChange}
                    suggestions />

                <FormField 
                    label="Cor:" 
                    type="color" 
                    name="color" 
                    value={newValues.color} 
                    onChange={handleChange}
                    suggestions />

                <Button>Cadastrar</Button>
            </form>

            <ul>
                {categories.map((element, index) => {
                    return (
                        <li key={index}>{element.name}</li>
                    )
                })}
            </ul>


            <Link to="/newvideo">
                Cadastrar Vídeo
            </Link>
        </PageTemplate>
    )
}

export default NewCategory;