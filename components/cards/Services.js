import React from 'react'
import {Card, CardReverse} from './Card'
import Anotaciones from './Anotaciones'
import styles from '@Fran&Miguel/styles/Services.module.css'
import Image from "next/image"


export default function Services() {
    let alisados = [
        "Alisa y aumenta el brillo de nuestro pelo.",
        "Elimina el frizz.",
        "Permite lucir un pelo suave y sedoso.",
        "Potencia su color natural.",
        "Permite eliminar la planchita de tu rutina diaria."
    ];

    let botox = [
        "Es ideal para reconstruir y sellar la fibra capilar.",
        "Elimina el frizz.",
        "Aporta brillo y suavidad.",
        "Mantiene tratamientos alisados/decoloración.",
        "Es apto para todo tipo de cabellos."
    ];

    let keratina = [
        "Evita el encrespamiento y elimina el frizz.",
        "Repara y Nutre el cabello.",
        "Aumenta el brillo.",
        "Potencia su color natural.",
        "Apto para todo tipo de cabellos."
    ];

    let nutricion = [
        "Es ideal para reconstruir y sellar la fibra capilar.",
        "Elimina el frizz.",
        "Aporta brillo y suavidad.",
        "Mantiene tratamientos alisados/decoloración.",
        "Es apto para todo tipo de cabellos."
    ];
    return (
        <>
            <h2 className={styles.title}>SERVICIOS</h2>
            <div className={styles.services}>
                <Card title={"Alisados"} imageSrc={"/images/alisado.svg"} alter={"alisados"} content={alisados} previous={true} before={"/images/alisadobefore.svg"} after={"/images/alisadoafter.svg"}>
                    <li>
                        <Image className={styles.me} src={"/images/reloj.svg"} width={26} height={26}/> De 3 a 5 horas  según el largo y la cantidad de cabello.
                    </li>
                    <li>
                    <Image className={styles.me} src={"/images/carita.svg"} width={26} height={30}/> Cualquier tipo de cabello, se recomienda a aquellas personas con el pelo rizado o crespo.
                    </li>
                    <li>
                    <Image className={styles.me} src={"/images/addcircle.svg"} width={30} height={30}/> No apto para cabellos decolorados
                    </li>
                </Card>

                <CardReverse title={"Botox Capilar"} imageSrc={"/images/botox.svg"} alter={"botox"} content={botox} previous={true} before={"/images/botoxbefore.svg"} after={"/images/botoxafter.svg"}>
                    <li>
                        <Image className={styles.me} src={"/images/reloj.svg"} width={26} height={26}/> De 3 a 4 horas  según el largo y la cantidad de cabello.
                    </li>
                    <li>
                        <Image className={styles.me} src={"/images/carita.svg"} width={26} height={30}/> Apto para todo tipo de cabellos.
                    </li>
                    <br/>
                </CardReverse>

                <Card title={"Shock de keratina"} imageSrc={"/images/keratina.svg"} alter={"keratina"} content={keratina} previous={true} before={"/images/keratinabefore.svg"} after={"/images/keratinaafter.svg"}>
                    <li>
                        <Image className={styles.me} src={"/images/reloj.svg"} width={26} height={26}/> De 3 a 5 horas  según el largo y la cantidad de cabello.
                    </li>
                    <li>
                        <Image className={styles.me} src={"/images/carita.svg"} width={26} height={30}/>  Apto para todo tipo de cabellos, especialmente cabellos con alisados.
                    </li>
                    <br/>
                </Card>

                <CardReverse title={"Nutricion"} imageSrc={"/images/nutricion.svg"} alter={"nutricion"} content={nutricion} previous={false} before={"/images/nutricionbefore.svg"} after={"/images/nutricionafter.svg"}>
                
                </CardReverse>
            </div>

            <Anotaciones/>

        </>
    )
}
