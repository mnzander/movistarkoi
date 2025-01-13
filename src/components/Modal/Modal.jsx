import styles from './Modal.module.css';
import { getImageUrl } from '../../utils';
import { useEffect, useState } from 'react';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
    }, [])
    
    const closeModal = () => setIsOpen(false);
    if (!isOpen) return null;

  return (
    <>
        <div className={styles.overlay}></div>
        <div className={styles.modal}>
            <div className={styles.modalImgContainer}>
                <button aria-label="Close modal" onClick={closeModal}>
                    <img
                        className={styles.closeIcon}
                        src={getImageUrl("/modal/closemenu.webp")} 
                        alt="Close modal" />
                </button>
                <img 
                    className={styles.modalImg}
                    src={getImageUrl("/modal/banner.webp")} 
                    alt="KOI Shirt 2025" 
                />
            </div>
            <div className={styles.modalText}>
                <h2 className={styles.title}>10% OFF! DON&apos;T MISS OUT!</h2>
                <p className={styles.description}>Get the new MKOI 2025 Jersey</p>
                <a className={styles.link} href='https://shop.movistarkoi.gg/' target='_blank'>ELYOYA10</a>
                <button aria-label="Close modal" onClick={closeModal} className={styles.closeBtn}>No, thanks</button>
            </div>
        </div>
    </>

  )
}