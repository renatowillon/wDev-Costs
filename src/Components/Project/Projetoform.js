import {useEffect, useState} from 'react';

import style from './Projetoform.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjetoForm({handleSubmit, btnText, projetoData}){

    const [categoria, setCategoria] = useState([])
    const [projeto, setProjeto] = useState(projetoData || {})
    useEffect(() => {
        fetch('http://localhost:5000/categoria', {
        method: "GET",
        headers: {'Content-Type': 'application/json',}
    })
        .then((resp) => resp.json())
        .then((data) => setCategoria(data))
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        //console.log(projeto)
        handleSubmit(projeto)
    }
    function handleChange(e){
        setProjeto({...projeto, [e.target.name]: e.target.value})
        
    }
    function handleCategoria(e){
        setProjeto({...projeto, categoria: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }
    })
        
    }

    return(
        
        <form onSubmit={submit} className={style.form}>
            <Input
            type="text"
            text="Nome do Projeto"
            name="name"
            placeholder="insira o nome do projeto"
            handleOnChange={handleChange}
            value={projeto.name ? projeto.name : ''}
            />
            
            <Input
            type="number"
            text="Orçamento de Projeto"
            name="budget"
            placeholder="Insira o orçamento total"
            handleOnChange={handleChange}
            value={projeto.budget ? projeto.budget : ''}
            />

            <Select
            name="category_id"
            text="Selecione a Categoria"
            options={categoria}
            handleOnChange={handleCategoria}
            value={projeto.categoria ? projeto.categoria.id : ''}
            />
            <SubmitButton text={btnText}/>
        </form>

        
    )
}

export default ProjetoForm;