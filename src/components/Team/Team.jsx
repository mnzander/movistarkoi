import { getImageUrl } from "../../utils";
import styles from './Team.module.css';
import players from '../../data/players.json';

export default function Team() {
  return (
    <section className={styles.container} id="team">
        <h2 className={styles.title}>LEC ROSTER 2025</h2>
        <div className={styles.content}>
            <img 
                className={styles.mapImg} 
                src={getImageUrl("/team/map.webp")} 
                alt="League of Legends Map" 
            />
            <ul className={styles.playersList}>
                {players.map((player) => {
                    return (
                        <a href={player.url} target="_blank" className={styles.playerLink} key={player.id}>
                            <li className={styles.playerItem}>
                                <img 
                                    className={styles.playerImg} 
                                    src={getImageUrl(player.photo)} 
                                    alt={`${player.nickname} image`} 
                                />
                                <div className={styles.playerInfo}>
                                    <h3 className={styles.playerName}>{player.name}</h3>
                                    <div className={styles.playerPositionContainer}>
                                        <img 
                                            className={styles.roleIcon}
                                            src={getImageUrl(player.roleIcon)} 
                                            alt={`${player.position} logo`} 
                                        />
                                        <p className={styles.playerPosition}>{player.position}</p>
                                    </div>

                                </div>
                            </li>
                        </a>
                    )
                })}
            </ul>
            <div className={styles.bottomBlur}></div>

        </div>
    </section>
  )
}
