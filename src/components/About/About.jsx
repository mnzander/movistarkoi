import YouTube from "react-youtube"
import styles from "./About.module.css"
import "animate.css"

export default function About() {

  return (
    <section className={styles.container} id="about">
        <div className={styles.content}>
        <h1 className={`${styles.title} animate__animated`}>This is Movistar KOI</h1>
            <p className={styles.description}>
            We are one of the premier esports clubs in Europe, proudly competing in the LEC—the continent&apos;s most prestigious league.<br /><br />With a dedicated professional team, we represent the brand on the global stage, participating in some of the world&apos;s most renowned esports tournaments.
            </p>
            <a href="https://www.youtube.com/watch?v=5PVC6VFp4L0&ab_channel=MovistarKOILeagueofLegends" target='_blank' className={styles.seeMoreBtn}>See more</a>
        </div>
        <div className={styles.videoWrapper}>
          <YouTube 
              videoId="9AtNT_7TOE0" 
              opts={{
                playerVars: { 
                  autoplay: 0, 
                  controls: 1,
                  showinfo: 0,
                  modestbranding: 0,
                  loop: 0,
                  autohide: 0,
                  fs: 1,
                  cc_lang_pref: 'es',
                  cc_load_policy: 1
                }
              }}
              className={styles.customVideoPlayer}
              aria-label="KOI LEC Video"
          />
        </div>
    </section>
  )
}
