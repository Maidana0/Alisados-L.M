import { BsWhatsapp, BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";

import titles from '@Fran&Miguel/styles/Titles.module.css' //Titulos
import styles from '@Fran&Miguel/styles/Banner.module.css' //Boton
import icons from '@Fran&Miguel/styles/Icons.module.css' //Icons

const classIcons = `${icons.icons_ellipse} ${icons.normal_icons}`

const Contact = () => {
    return (<>
        <div id="contact" className={styles.container}>
            <h1 className={titles.normal_title}>CONTACTO</h1>

            <div className={`${icons.normal_container}`}>

                <a href=""
                    className={classIcons}>
                    <BsWhatsapp title='WhatsApp'
                        alt={'WhatsApp'}
                        size={'4em'} />
                </a>

                <a href="/"
                    className={classIcons}>
                    <BsInstagram title='Instagram'
                        alt={'Instagram'}
                        size={'4em'} />
                </a>

                <a href=""
                    className={`${icons.face_icon}`}>
                    <BsFacebook title='Facebook'
                        alt={'Facebook'}
                        size={'6em'} />
                </a>

                <a href=""
                    className={classIcons}>
                    <BsTiktok
                        title='TikTok'
                        alt={'TikTok'}
                        size={'4em'}
                    />
                </a>

            </div>

            <button className={`${styles.button} ${styles.button_contact}`}>
                Reservar Turno
            </button>

        </div>
    </>)
}

export default Contact