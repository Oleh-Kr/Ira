import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import React from 'react'

export default function Home() {
    return (
        <div>
            <div className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <div className={styles.leftCol}>
                        <p className={styles.subhead}>It's Easily &amp; Tasty</p>
                        <h1 className={styles.heroH1}>Have a minute — have a cake</h1>

                        <div className={styles.heroCta}>
                            <ul className={styles.heroUl}>
                                <li className={styles.heroLi}>
                                    <Link to="/order" className={styles.order}>Create dessert</Link>
                                </li>
                                <li className={styles.heroLi}>
                                    <Link to="/" className={styles.instagram}>Instagram</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="images/bakery.jpg" className={styles.heroImg} alt="Illustration" />
            </div>
            <div className={styles.testimonialsSection} data-testid={"testimonialsSection"}>
                <div className={styles.containerFact}>
                    <ul className={styles.factUl}>
                        <li data-testid={"factItem"} className={styles.factLi}>
                            <img className={styles.factImg} src="images/cupcake.jpg" alt="cupcake" />
                            <p className={styles.factP}>Did you know that the world's largest cupcake ever made weighed a whopping 1,224.65 kg (2,700 lbs) and measured 1.2 meters (4 feet) tall? It was created in 2011 by Georgetown Cupcake, a bakery in Washington D.C., and required over 200 pounds of flour, 100 pounds of sugar, and 2,000 eggs to make! The enormous cupcake took more than 24 hours to bake and required a special oven to accommodate its size. Once finished, it was cut into more than 5,000 individual servings and sold to raise money for charity.</p>
                        </li>
                        <li data-testid={"factItem"} className={styles.factLi}>
                            <img className={styles.factImg} src="images/croissants.webp" alt="croissants" />
                            <p className={styles.factP}>Did you know that croissants were not originally a French invention? The croissant is said to have originated in Austria, where it was known as a "kipferl" and was a staple of Viennese bakeries in the 19th century. The crescent shape of the croissant is said to have been inspired by the crescent moon on the Ottoman flag, as Vienna was under siege by the Ottomans at the time. The croissant was later introduced to France in the early 20th century and became a popular breakfast pastry. Today, croissants are enjoyed all over the world and are often filled with chocolate or almond paste for added flavor.</p>
                        </li>
                        <li data-testid={"factItem"} className={styles.factLi}>
                            <img className={styles.factImg} src="images/cookies.jpg" alt="cookies" />
                            <p className={styles.factP}>Did you know that the world's largest cookie ever made weighed over 18 metric tons (40,000 pounds)? This giant cookie was created in the town of Weighbridge, UK in 2014 and measured more than 102 feet in diameter. It was made with 4,000 pounds of butter, 8,000 pounds of sugar, and 18,000 pounds of flour! The cookie took more than 13 hours to bake and required a special oven that was transported to the site. Once baked, the cookie was cut into 33,000 individual servings and sold to raise money for charity. This delicious feat set a new world record for the largest cookie ever made!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
