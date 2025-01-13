import styles from "./Schedule.module.css";
import { getImageUrl } from "../../utils";

export default function Schedule() {

    const urlRedirect = () => {
        window.open("https://lolesports.com/es-ES?leagues=lec");
    }

  return (
    <section id="schedule" className={styles.container}>
        <h2 className={styles.title}>SCHEDULE</h2>
        <h3 className={styles.subtitle}>Winter Split Calendar</h3>
        <div className={styles.imgContainer} onClick={urlRedirect}>
            <img 
              className={styles.calendarImg} 
              src={getImageUrl("/schedule/calendar.PNG")} 
              alt="KOI LEC Calendar"
            />
            <img 
              className={styles.verticalCalendarImg} 
              src={getImageUrl("schedule/calendarVertical.png")} 
              alt="KOI LEC Calendar" 
            />
        </div>
    </section>
  )
}
