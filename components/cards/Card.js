import React, { useState } from "react";
import styles from '@Fran&Miguel/styles/Services.module.css'
import Image from "next/image"
import Modal from "../Modal/Modal";

export const Card = ({ previous, title, imageSrc, alter, content, children, before, after }) => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <div className={styles.card}>
            <div className={styles.card}>
                <Image
                    className={styles.img}
                    src={imageSrc}
                    width={100}
                    height={100}
                    alt={alter}
                    priority
                />
                <div className={styles.texto}>
                    <div className={styles.lista}>
                        <h2 className={styles.subtitles}>{title}</h2>
                        <ul>
                            {content.map((text, index) => (
                                <li key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                    <ul className={styles.lightText}>
                        {children}
                    </ul>
                    {previous
                        ? <p className={styles.previous} onClick={handleOpenModal}> <button className={styles.previous} onClick={handleOpenModal} >Trabajos realizados</button></p>
                        : <p></p>
                    }
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <Image
                                className={styles.imagesAB}
                                src={before}
                                width={510}
                                height={394.51}
                                alt={alter}
                                priority
                            />
                            <Image
                                className={styles.imagesAB}
                                src={after}
                                width={510}
                                height={394.51}
                                alt={alter}
                                priority
                            />
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
};




export const CardReverse = ({ previous, title, imageSrc, alter, content, children, before, after }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <div className={styles.cardReverse}>
            <div className={styles.cardReverse}>
                <div className={styles.texto}>
                    <div className={styles.lista}>
                        <h2 className={styles.subtitles}>{title}</h2>
                        <ul>
                            {content.map((text, index) => (
                                <li key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                    <ul className={styles.lightText}>
                        {children}
                    </ul>
                    {previous
                        ? <p className={styles.previous} onClick={handleOpenModal}> <button className={styles.previous} onClick={handleOpenModal} >Trabajos realizados</button></p>
                        : <p></p>
                    }
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <Image
                                className={styles.imagesAB}
                                src={before}
                                width={510}
                                height={394.51}
                                alt={alter}
                                priority
                            />
                            <Image
                                className={styles.imagesAB}
                                src={after}
                                width={510}
                                height={394.51}
                                alt={alter}
                                priority
                            />
                        </Modal>
                    )}
                </div>
                <Image
                    className={styles.img}
                    src={imageSrc}
                    width={100}
                    height={100}
                    alt={alter}
                    priority
                />
            </div>
        </div>
    );
};
