import React, { useState } from "react";
import styles from '@Fran&Miguel/styles/Services.module.css'
import Image from "next/image"

export const Card = ({ previous, title, imageSrc, alter, content, children, before, after }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };



    return (
        <div className={styles.card}>
            {!hovered
                ? <div className={styles.card}>
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
                            ? <p className={styles.previous} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <a href="/">Trabajos realizados</a></p>
                            : <p></p>
                        }
                    </div>
                </div>

                : <div className={styles.cardReverse} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Image
                        src={before}
                        width={510}
                        height={394.51}
                        alt={alter}
                        priority
                    />
                    <Image
                        src={after}
                        width={510}
                        height={394.51}
                        alt={alter}
                        priority
                    />
                </div>
            }

        </div>
    );
};




export const CardReverse = ({ previous, title, imageSrc, alter, content, children, before, after }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className={styles.cardReverse}>
            {!hovered
                ? <div className={styles.cardReverse}>
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
                            ? <p className={styles.previous} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <a href="/">Trabajos realizados</a></p>
                            : <p></p>
                        }
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

                : <div className={styles.cardReverse} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Image
                        src={before}
                        width={510}
                        height={394.51}
                        alt={alter}
                        priority
                    />
                    <Image
                        src={after}
                        width={510}
                        height={394.51}
                        alt={alter}
                        priority
                    />
                </div>
            }

        </div>
    );
};
