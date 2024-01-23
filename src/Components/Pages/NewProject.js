import {useNavigate} from 'react-router-dom';
import ProjetoForm from '../Project/Projetoform';
import style from './NewProject.module.css';


function NewProject(){
        
       const navigate = useNavigate()

        function createPost(projeto) {
        //INICIALIZAÇÃO COSTS NO SERVIDOR
        projeto.costs = 0
        projeto.services = []

        fetch('http://localhost:5000/projeto', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(projeto),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/Projetos', {messenge: 'Projeto criado com sucesso!'})
        })
        .catch((err) => console.log(err))

    }

    

    return(
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
}

export default NewProject