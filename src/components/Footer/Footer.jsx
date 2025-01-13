import { getImageUrl } from '../../utils';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact us</h2>
            <p>Join the leading e-sports community</p>
            <p>#SomosMovistarKOI</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img
                    className={`${styles.logoImg} ${styles.twitterLogo}`} 
                    src={getImageUrl("/footer/x.webp")} 
                    alt="X-Twitter logo" 
                />
                <a href='https://x.com/movistarkoi' target="_blank">x.com/movistarkoi</a>
            </li>
            <li className={styles.link}>
                <img
                    className={styles.logoImg} 
                    src={getImageUrl("/footer/insta.webp")} 
                    alt="Instagram logo" 
                />
                <a href='https://www.instagram.com/movistarkoi/' target="_blank">instagram.com/movistarkoi</a>
            </li>
            <li className={styles.link}>
                <img
                    className={`${styles.logoImg} ${styles.youtubeLogo}`} 
                    src={getImageUrl("/footer/youtube.webp")} 
                    alt="Youtube logo" 
                />
                <a href='https://www.youtube.com/@MovistarKOILoL' target="_blank">youtube.com/MovistarKOILol</a>
            </li>
            <li className={styles.link}>
                <img 
                    className={`${styles.logoImg} ${styles.discordLogo}`} 
                    src={getImageUrl("/footer/discord.webp")} 
                    alt="Discord logo" 
                />
                <a href='https://discord.com/invite/movistarkoi' target="_blank">Join our Discord community</a>
            </li>
        </ul>
    </footer>
  )
}
