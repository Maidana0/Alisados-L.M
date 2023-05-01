import { BsWhatsapp, BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";

import titles from '@Fran&Miguel/styles/Titles.module.css' //Titulos
import buttons from '@Fran&Miguel/styles/Banner.module.css' //Boton
import icons from '@Fran&Miguel/styles/Icons.module.css' //Icons
import styles from '@Fran&Miguel/styles/PagoContacto.module.css'


const Contact = () => {
    return (<>
        <div id="contact" className={styles.container}>
            <h1 className={titles.normal_title}>CONTACTO</h1>

            <div className={`${icons.icons_container} ${icons.normal_container}`}>
                <div className={`${icons.icons_ellipse} ${icons.normal_icons}`}>
                    <BsWhatsapp title='Whatsapp'
                        alt={'Whatsapp'}
                        size={'4em'} />
                </div>
                <div className={`${icons.icons_ellipse} ${icons.normal_icons}`}>
                    <BsInstagram title='Instagram'
                        alt={'Instagram'}
                        size={'4em'} />
                </div>
                <div className={`${icons.face_icon}`}>
                    <BsFacebook title='Facebook'
                        alt={'Facebook'}
                        size={'6em'} />
                </div>

                <div className={`${icons.icons_ellipse} ${icons.normal_icons}`}>
                    <BsTiktok title='TikTok'
                        alt={'TikTok'}
                        size={'4em'} />
                </div>
            </div>
            <button className={`${buttons.button} ${buttons.button_contact}`}>
                Reservar Turno
            </button>

        </div>
    </>)
}

export default Contact