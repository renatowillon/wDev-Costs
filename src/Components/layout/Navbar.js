import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

function Navbar (){
    return(
       <nav className={styles.navbar}>
        <Container>
            <Link to="/"><img src={logo} alt='Costs'/></Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>    
                    <Link to="/Projetos">Projetos</Link>
                </li>
               <li className={styles.item}>
                    <Link to="/Empresa">Empresa</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Contato">Contato</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/teste">Teste</Link>
                </li> 
                   
                {/* <li class={styles.item}>    
                    <Link to="/NewProject">Novo Projeto</Link>
                </li> */}
            </ul>
        </Container>
       </nav>
    )
}

export default Navbar;