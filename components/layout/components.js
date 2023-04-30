import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import styles from '@Fran&Miguel/styles/Layout.module.css'
import Image from "next/image";

export const Icons = () => <div className={styles.icons_contain}>
    <div className={`${styles.icons_ellipse} ${styles.whatsapp}`}>
        <BsWhatsapp title='Whatsapp'
            alt={'Whatsapp'}
            size={'2em'} />
    </div>
    <div className={`${styles.icons_ellipse} ${styles.instagram}`}>
        <BsInstagram title='Instagram'
            alt={'Instagram'}
            size={'2em'} />
    </div>
    <div className={`${styles.facebook}`}>
        <BsFacebook title='Facebook'
            alt={'Facebook'}
            size={'2.8em'} />
    </div>
</div>



export const Logo = () => <div className={styles.logo_contain}>
    <Image
        src={'logo.svg'}
        width={65}
        height={44}
        alt={'Alisados.LM'}
        priority
    />
</div>
