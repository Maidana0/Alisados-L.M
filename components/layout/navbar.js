import styles from '@Fran&Miguel/styles/Layout.module.css'
import { Icons, Logo } from './components';
import { Sling as Hamburger } from 'hamburger-react'

const paths = ['SOBRE MÍ', 'SERVICIOS', 'PRODUCTOS', 'CONTACTOS']


const Navbar = () => {
    return (
        <header className={styles.navbar}>

            <Logo />
            <div id='nav' className={`${styles.nav_contain} ${styles.nav_responsive}`}>

                <nav className={styles.nav}>
                    <ul className={styles.nav_items}>
                        {paths.map(path => (
                            <li key={path} className={styles.nav_links}>{path}</li>
                        ))}
                    </ul>
                    <Icons />
                </nav>

            </div>


            <div className={styles.btn_burger}>
                <Hamburger
                    color="#FFF"
                    onToggle={toggled => {
                        const nav = document.getElementById('nav')
                        if (toggled) {
                            nav.classList.remove(styles.nav_responsive)
                        }
                        else {
                            nav.classList.add(styles.nav_responsive)
                        }
                        // toggled ?  nav.classList.remove(styles.nav_responsive)
                        //  :
                        //   nav.classList.add(styles.nav_responsive)
                    }} />
            </div>
        </header >
    )
}

export default Navbar