import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css';



function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaGithub /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className={styles.copy_right}><span>wDev | Costs</span> &copy; 2024 <span>| v1.1.0</span> </p>
            
        </footer>
    )
}

export default Footer;