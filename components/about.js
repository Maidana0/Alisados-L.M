import styles from "@Fran&Miguel/styles/About.module.css"
import Image from "next/image"
const About = () => {
    return (
        <div className={styles.about_container}>
            <h1 className={styles.about_title}>
                SOBRE MÍ
            </h1>

            <div className={styles.about}>
                <Image
                    src={'/images/about-me.svg'}
                    width={277}
                    height={367}
                    alt="Ludmi!"
                    priority
                />

                <div className={styles.about_text}>
                    <span>¡Holaaa! Soy Ludmila Medina,</span>
                    <p>
                        tengo 20 años y decidí emprender en este mundo de la belleza ♡
                    </p>
                    <p>
                        A los 15 años realicé un curso de peluquería, hacía mis trabajos yendo
                        a domicilio q mis amigas, familia y conocidos lo hice por dos años
                        mientras estudiaba en la secundaria.
                    </p>
                    <p>
                        En el 2021 pude poner mi propio salón de belleza donde realizo
                        tratamientos capilares que nutren, reparan y alisan el cabello.
                        Brindo mi servicio con pasión y dedicación a cada clienta que pasa para que se vallan contentas y satisfechas, que puedan sentirse cómodas y seguras a la hora de un cambio u mejorar y cuidar su pelo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About