import ProjetoForm from '../Project/Projetoform';
import style from './NewProject.module.css';


function NewProject(){
    return(
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm btnText="Criar Projeto" />
        </div>
    );
}

export default NewProject