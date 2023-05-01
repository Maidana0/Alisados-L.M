import styles from '@Fran&Miguel/styles/Banner.module.css'
import titles from '@Fran&Miguel/styles/Titles.module.css'

export const Front = () => (
  <div className={`${styles.banner_container} ${styles.banner_front}`}>
    <button className={styles.button}>Pedir Turno</button>
  </div>
)


export const Products = () => (
  <div  id="productos" className={`${styles.banner_container} ${styles.banner_products}`}>
    <div className={styles.products_container}>

      <div className={titles.title_container}>
        PRODUCTOS
      </div>

      <div className={styles.products_text}>
        <span>
          Ahora también podés encontrar <a href='/'>acá</a> productos ideales para el cuidado de tu cabello
        </span>
      </div>
    </div>
  </div>
)

export const GoogleMaps = () => (
  <div className={`${styles.map_container} `}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.8503650250564!2d-58.622420924774005!3d-34.55734385504968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbbdce03c8489%3A0x9b4cd668fb175263!2sCatamarca%201334%2C%20B1692APP%20El%20Libertador%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1682886453944!5m2!1ses-419!2sar"
      className={styles.map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div>

)