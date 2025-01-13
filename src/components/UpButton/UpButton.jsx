import styles from './UpButton.module.css';
import { getImageUrl } from '../../utils';

export default function UpButton() {
  return (
    <div className={styles.container}>
        <a href="#top" className={styles.upButton}>
            <img 
                className={styles.arrowImg}
                src={getImageUrl("/upbutton/arrow.webp")} 
                alt="Button to go up" 
            />
        </a>
    </div>
  )
}
