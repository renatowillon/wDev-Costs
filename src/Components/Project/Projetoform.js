import {useEffect, useState} from 'react';

import style from './Projetoform.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjetoForm({btnText}){

    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categoria', {
        method: "GET",
        headers: {'Content-Type': 'application/json',}
    })
        .then((resp) => resp.json())
        .then((data) => setCategoria(data))
        .catch((err) => console.log(err))
    }, [])

    return(
        <form className={style.form}>
            <Input
            type="text"
            text="Nome do Projeto"
            name="name"
            placeholder="insira o nome do projeto"
            />
            
            <Input
            type="number"
            text="Orçamento de Projeto"
            name="budget"
            placeholder="Insira o orçamento total"
            />

            <Select
            name="category_id"
            text="Selecione a Categoria"
            options={categoria}
            />
            
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjetoForm;