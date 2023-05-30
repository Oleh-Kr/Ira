import React from 'react';
import styles from "./Footer.module.scss";
export default function Contact() {
    return (
        <div className={styles.contactSection}>
            <div className={styles.contactLeft}>
                <h2 id={styles.contactH2}>Contact</h2>

                <form action="">
                    <label className={styles.contactLabel} htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />

                    <label className={styles.contactLabel} htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />

                    <label className={styles.contactLabel} htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>

                    <input type="submit" className="send-message-cta" value="Send message" />
                </form>
                <iframe className={styles.smallMap} title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.6710148973!2d23.942195819019865!3d49.8326679492685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1679152548698!5m2!1suk!2sua"></iframe>

            </div>

            <iframe className={styles.bigMap} title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.6710148973!2d23.942195819019865!3d49.8326679492685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1679152548698!5m2!1suk!2sua"></iframe>

        </div>
    );
}
