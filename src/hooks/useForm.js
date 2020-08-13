import {useState} from 'react'

const useForm = (initialValues) => {
    const [newValues, setNewValues] = useState(initialValues);

    const handleValues = (prop, value) => {
        setNewValues({
            ...newValues,
            [prop]: value 
        });
    }

    const handleChange = (data) => {
        const { name, value } = data.target;
        handleValues(
            name, value
        )
    }

    const clearValues = () => {
        setNewValues(initialValues)
    }

    return {
        newValues,
        handleChange,
        clearValues
    }

}

export default useForm;