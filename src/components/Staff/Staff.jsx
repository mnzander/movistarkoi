import staff from "../../data/staff.json";
import styles from "./Staff.module.css";
import { getImageUrl } from "../../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Staff() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1, // Ajusta para pantallas medianas
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Ajusta para pantallas pequeñas
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Ajusta para móviles
                },
            },
        ],
    };

    return (
        <section className={styles.container} id="family">
            <h2 className={styles.title}>STAFF</h2>
            <div className={styles.content}>
                <Slider {...settings}>
                    {staff.map((member) => (
                        <div key={member.id} className={styles.memberCard}>
                            <div className={styles.imageContainer}>
                                <img
                                    className={styles.memberImage}
                                    src={getImageUrl(member.image)}
                                    alt={`${member.name} image`}
                                />
                            </div>
                            <div className={styles.memberInfo}>
                                <p className={styles.memberName}>{member.name}</p>
                                <p className={styles.memberRole}>{member.role}</p>
                                <a href={member.url} target="_blank" className={styles.memberBtn} aria-label={`Read more about ${member.name}`}>Read More</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}