import Image from "next/image"
import styles from '@Fran&Miguel/styles/Banner.module.css'
import icons from '@Fran&Miguel/styles/Icons.module.css' //Iconos
import titles from '@Fran&Miguel/styles/Titles.module.css' //Titulos

const InfoPay = () => (
    <div className={styles.container}>

        <h1 className={titles.normal_title}>MÉTODOS DE PAGO</h1>

        <div className={`${icons.normal_container}`}>
            <div className={`${icons.icons_ellipse} `}>
                <Image
                    src={"/images/efectivo.svg"}
                    width={145}
                    height={145}
                    alt={"Efectivo"}
                    priority
                />
                <p className={styles.text_pay}>Efectivo</p>
            </div>

            <div className={`${icons.icons_ellipse} `}>
                <Image
                    src={"/images/transferencia.svg"}
                    width={145}
                    height={145}
                    alt={"Transferencia"}
                    priority
                />
                <p className={styles.text_pay}>Transferencia</p>
            </div>
            <div className={`${icons.icons_ellipse} `}>
                <Image
                    src={"/images/mercadopago.svg"}
                    width={145}
                    height={145}
                    alt={"Mercado Pago"}
                    priority
                />
                <p className={styles.text_pay}>Mercado Pago</p>
            </div>
        </div>

    </div>
)


export default InfoPay


