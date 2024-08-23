import styles from '@Fran&Miguel/styles/Layout.module.css'
import { Icons, Logo } from './components';
import { Sling as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const paths = [
    { path: "about", content: 'sobre mí' },
    { path: "services", content: 'servicios' },
    { path: "products", content: 'productos' },
    { path: "contact", content: 'contacto' },
]


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => setOpen(!isOpen)
    return (
        <header className={styles.navbar}>

            <Logo />
            <div id='nav' className={`${styles.nav_container} ${isOpen ? styles.nav_active : styles.nav_responsive}`}>
                <div className={styles.backdrop} onClick={handleClick}></div>
                <nav className={`${styles.nav} `}>
                    <ul className={styles.nav_items}>
                        {paths.map(({ path, content }) => (
                            <Link key={path} href={`/#${path}`} scroll={false} onClick={handleClick}>

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
                    toggled={isOpen}
                    toggle={setOpen}
                // if (nav) {
                //     !isOpen ? nav.classList.remove(styles.nav_responsive)
                //         :
                //         nav.classList.add(styles.nav_responsive)
                //     return setOpen(!isOpen)
                // }
                />
            </div>
        </header >
    )
}

export default Navbar