import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import styles from '@Fran&Miguel/styles/Icons.module.css'
import logoLayout from '@Fran&Miguel/styles/Layout.module.css'

import Image from "next/image";

export const Icons = () => <div className={styles.icons_container}>
    <a href='https://wa.me/qr/6EFPTR54CGIPN1' target="_blank"
        className={`${styles.icons_ellipse} ${styles.whatsapp}`}>
        <BsWhatsapp title='Whatsapp'
            alt={'Whatsapp'}
            size={'1.5em'} />
    </a>
    <a href='https://instagram.com/alisadoss.lm?igshid=Yjk4NWM2ZWVkMw==' target="_blank"
        className={`${styles.icons_ellipse} ${styles.instagram}`}>
        <BsInstagram title='Instagram'
            alt={'Instagram'}
            size={'1.5em'} />
    </a>
    <a href='https://m.facebook.com/111515650989942/' target="_blank" className={`${styles.facebook}`}>
        <BsFacebook title='Facebook'
            alt={'Facebook'}
            size={'2.3em'}
        />
    </a>
</div>



export const Logo = () => <div className={logoLayout.logo_container}>
    <Image
        src={'logo.svg'}
        width={48}
        height={28}
        alt={'Alisados.LM'}
        priority
    />
</div>
