import { useState} from 'react';
import styles from './Nav.module.css'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    // 2. Fungsi buat nge-flip statusnya tiap kali tombol diklik
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className= {styles.header}>
            
            <div className= {styles['nav-container']}>
            <div className={styles.logo}>
                <img src="src\assets\hero.png" alt="react_logo" />
                <a className={styles.logoText}href="/">barWb</a>
            </div>

            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </button>

            <nav>
                <ul className={`${styles.listContainer} ${isOpen ? styles.active : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            
           <div 
                className={`${styles.overlay} ${isOpen ? styles.active : ''}`} 
                onClick={toggleMenu}
            ></div>
            </div>
        </header>
    )
}

export default Navbar;