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

                <a href='https://wa.me/qr/6EFPTR54CGIPN1' target="_blank"
                    className={classIcons}>
                    <BsWhatsapp title='WhatsApp'
                        alt={'WhatsApp'}
                        size={'4em'} />
                </a>

                <a href='https://instagram.com/alisadoss.lm?igshid=Yjk4NWM2ZWVkMw==' target="_blank"
                    className={classIcons}>
                    <BsInstagram title='Instagram'
                        alt={'Instagram'}
                        size={'4em'} />
                </a>

                <a href='https://m.facebook.com/111515650989942/' target="_blank"
                    className={`${icons.face_icon}`}>
                    <BsFacebook title='Facebook'
                        alt={'Facebook'}
                        size={'6em'} />
                </a>

                <a href='https://www.tiktok.com/@lulymedina360?_t=8c4CkvIsPqv&_r=1' target="_blank"
                    className={classIcons}>
                    <BsTiktok
                        title='TikTok'
                        alt={'TikTok'}
                        size={'4em'}
                    />
                </a>

            </div>

            <a target="_blank" href='https://wa.me/qr/6EFPTR54CGIPN1' className={`${styles.button} ${styles.button_contact}`}>
                Reservar Turno
            </a>

        </div>
    </>)
}

export default Contact