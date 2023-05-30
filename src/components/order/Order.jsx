import React from "react";
import styles from "./Order.module.scss";

export default function Order() {
    return (
        <div className={styles.order}>
            <div className={styles.containerOrder}>
                <div className={styles.orderRight}>
                    <h1 className={styles.orderName}>Order</h1>
                    <form action="">
                        <label htmlFor="product">Product</label>
                        <input type="text" id="product" name="product" />

                        <label htmlFor="thing">Amount</label>
                        <input type="number" id="number" name="number" />

                        <label htmlFor="contact">Contact</label>
                        <input type="number" id="number" name="number" />

                        <label htmlFor="name-order">Your name</label>
                        <input type="text" id="name-order" name="name-order" />

                        <input type="submit" className={styles.orderButton} value="Order" />
                    </form>
                </div>
                <img className={styles.orderLogo} src="images/logo.jpg" alt="Logo" />
            </div>
        </div>
    )
}
