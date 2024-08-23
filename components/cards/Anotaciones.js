import React from 'react'
import styles from '@Fran&Miguel/styles/Services.module.css'

export default function Anotaciones() {
    return (
        <div className={styles.anotaciones}>
            <div className={styles.left}>
                <h2 className={styles.titleContainer}>¿Cómo asistir al turno?</h2>
                <p>
                    Cabello lavado solo con shampoo neutro o shampoo de uso diario. Sin acondicionador | sin aceites | sin protector térmico.
                </p>
                <p>
                    Tolerancia máxima 10 mn después del horario acordado.
                </p>
            </div>

            <div className={styles.left}>
                <h2 className={styles.titleContainer}>Cuidados post alisado</h2>
                <p>
                    Antes de lavarlo darle una repasada de plancha para eliminar posibles marcas.
                </p>
                <p>Realizarse Baños de crema ya que el cabello se tiende a deshidratar y tenemos que devolver la humectación.</p>
                <p>
                    Secar con secador y aplicar protector térmico NO dormir con el pelo mojado ni húmedo
                </p>
            </div>
        </div>
    )
}
