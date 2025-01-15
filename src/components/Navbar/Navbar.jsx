import { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";
import 'animate.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
        <nav className={styles.navbar}>
            <a href="#top">
                <img className={`${styles.logoImage} animate__animated animate__flip`} src={getImageUrl("/navbar/mkoi-logo.webp")} alt="Movistar KOI logo" />
            </a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={
                        menuOpen
                            ? getImageUrl("/navbar/closemenu.webp")
                            : getImageUrl("/navbar/openmenu.webp")
                    } 
                    alt="Menu Button" 
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#team">Team</a>
                    </li>
                    <li>
                        <a href="#family">Staff</a>
                    </li>
                    <li>
                        <a href="#schedule">Schedule</a>
                    </li>
                    <li>
                        <a href="https://shop.movistarkoi.gg/" target="_blank">Shop</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
