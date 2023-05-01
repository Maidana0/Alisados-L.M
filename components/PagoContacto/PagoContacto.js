import styles from '@Fran&Miguel/styles/PagoContacto.module.css'
import Image from "next/image"

import titles from '@Fran&Miguel/styles/Titles.module.css' //Titulos

export default function PagoContacto() {
    return (
        <div className={styles.pago}>
            <h1 className={titles.normal_title}>MÉTODOS DE PAGO</h1>
            <div className={styles.containerFlex}>
                <div className={styles.dflex}>
                    <Image
                        className={styles.img}
                        src={"/images/efectivo.svg"}
                        width={162}
                        height={162}
                        alt={"efectivo"}
                        priority
                    />
                    <p>Efectivo</p>
                </div>
                <div className={styles.dflex}>
                    <Image
                        className={styles.img}
                        src={"/images/transferencia.svg"}
                        width={162}
                        height={162}
                        alt={"transferencia"}
                        priority
                    />
                    <p>Transferencia</p>
                </div>
                <div className={styles.dflex}>
                    <Image
                        className={styles.img}
                        src={"/images/mercadopago.svg"}
                        width={162}
                        height={162}
                        alt={"mercadopago"}
                        priority
                    />
                    <p>Mercado Pago</p>
                </div>
            </div>
        </div>
    )
}




