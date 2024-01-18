import style from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home(){
    return(
        <section className={style.home_container}>
            <h1> Bem Vindo ao <span>wDev | Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/NewProject" text="Criar Projeto"/>
            <img src={savings} alt="Costs" />
        </section>
);
}

export default Home