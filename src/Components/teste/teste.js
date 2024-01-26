import style from './teste.css';
import { useState } from 'react';



function Contador (){
    const [contador, setContador] = useState(1);
    
    function adicionarContador(){
        setContador (contador + 1);
        console.log('Adicionou!');
    }
    
    return( 
    <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
    </div>
    
    )
}

function Pessoa (props){
    const nome = props.nome;
    const idade = props.idade;
    const sexo = props.sexo;
    return (
    <div>
    {nome}
    {idade}
    {sexo}
    </div>
    )
}



function Pagina(){
    return (
    <div className={style.centro}>
        <Contador />

        <Pessoa nome="Renato" />
        <Pessoa sexo="Masc" />
        <Pessoa idade="28" />
    </div>
)
}

export default Pagina;