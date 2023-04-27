import styles from '@Fran&Miguel/styles/Layout.module.css'
import Image from 'next/image'


const icons = ['whatsapp', 'instagram', 'facebook']


const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo_contain}>
                <Image
                    src={'logo.svg'}
                    width={68}
                    height={40}
                    alt={'Alisados.LM'}
                    priority
                />
            </div>
            <nav id='nav' className={styles.nav}>
                <ul className={styles.nav_items}>
                    <li className={styles.nav_links}>SOBRE MÍ</li>
                    <li className={styles.nav_links}>SERVICIOS</li>
                    <li className={styles.nav_links}>PRODUCTOS</li>
                    <li className={styles.nav_links}>CONTACTOS</li>
                </ul>

                <div>
                    {/* {
                    icons.map(icon => (
                        <div className={`${styles.icons_contain} ${styles.icon}`}>
                            <Image
                                src={`/icons/${icon}.svg`}
                                width={80}
                                height={80}
                                alt={icon}
                                priority
                            />
                        </div>
                    ))
                } */}
                </div>

            </nav>
        </header>
    )
}

export default Navbar