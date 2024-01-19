import style from './Projetoform.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjetoForm({btnText}){
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
            text="Orçamento de Orçamento"
            name="budget"
            placeholder="Insira o orçamento total"
            />

            <div>
                <Select
                name="category_id"
                text="Selecione a Categoria"
                />
            </div>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjetoForm;