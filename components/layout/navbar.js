import styles from '@Fran&Miguel/styles/Layout.module.css'
import { Icons, Logo } from './components';
import { Sling as Hamburger } from 'hamburger-react'
import Link from 'next/link';

const paths = [
    { path: "about", content: 'sobre mí' },
    { path: "services", content: 'servicios' },
    { path: "products", content: 'productos' },
    { path: "contact", content: 'contacto' },
]


const Navbar = () => {
    return (
        <header className={styles.navbar}>

            <Logo />
            <div id='nav' className={`${styles.nav_container} ${styles.nav_responsive}`}>

                <nav className={styles.nav}>
                    <ul className={styles.nav_items}>
                        {paths.map(({ path, content }) => (
                            <Link key={path} href={`/#${path}`} scroll={false}>

                                <li className={`${styles.nav_links} ${styles.active}`}>
                                    {content}
                                </li>
                            </Link>

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