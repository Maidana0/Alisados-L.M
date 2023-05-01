import React from 'react'
import styles from '@Fran&Miguel/styles/PagoContacto.module.css'
import Image from "next/image"

export default function PagoContacto() {
    return (
        <div>
            <div className={styles.pago}>
                <h1 className={styles.title}>MÉTODOS DE PAGO</h1>
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

            <div className={styles.contacto}>
                <h1 className={styles.title}>CONTACTO</h1>
                <div className={styles.containerFlex}>
                    <a href="/">
                        <Image
                            className={styles.icons}
                            src={"/images/whatsapp.svg"}
                            width={80}
                            height={80}
                            alt={"whatsapp"}
                            priority
                        />
                    </a>

                    <a href="/">
                        <Image
                            className={styles.icons}
                            src={"/images/whatsapp.svg"}
                            width={80}
                            height={80}
                            alt={"whatsapp"}
                            priority
                        />
                    </a>

                    <a href="/">
                        <Image
                            className={styles.icons}
                            src={"/images/facebook.svg"}
                            width={80}
                            height={80}
                            alt={"facebook"}
                            priority
                        />
                    </a>

                    <a href="/">
                        <Image
                            className={styles.icons}
                            src={"/images/tiktok.svg"}
                            width={80}
                            height={80}
                            alt={"tiktok"}
                            priority
                        />
                    </a>
                    
                </div>
                <div className={styles.containerFlex}>
                    <button className={styles.buttonalis}>
                        Reservar Turno
                    </button>
                </div>
                
            </div>
        </div>
    )
}
