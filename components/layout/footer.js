import { Icons, Logo } from "./components"
import styles from '@Fran&Miguel/styles/Layout.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <Icons/>
    </footer>
  )
}

export default Footer