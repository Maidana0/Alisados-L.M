import styles from '@Fran&Miguel/styles/Banner.module.css'
import titles from '@Fran&Miguel/styles/Titles.module.css'

export const Front = () => (
  <div className={`${styles.banner_contain} ${styles.banner_front}`}>
    <button className={styles.button}>Pedir Turno</button>
  </div>
)


export const Products = () => (
  <div className={`${styles.banner_contain} ${styles.banner_products}`}>
    <div className={styles.products_contain}>

      <div className={titles.title_contain}>
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

