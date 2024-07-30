import React from "react";
import styles from "./Footerrr.module.css";

const Footerrr = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerHeader}>About Us</h2>
          <p className={styles.footerText}>
            We are a company dedicated to providing the best service to our
            customers. Our commitment to quality and excellence is unmatched.
          </p> 
        </div>
        <div className={`${styles.footerSection} ${styles.centeredSection}`}>
          <h2 className={styles.footerHeader}>Quick Links</h2>
          <ul className={styles.footerList}>
            <li>
              <a href="/home" className={styles.footerLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={styles.footerLink}>
                About
              </a>
            </li>
            <li>
              <a href="/products" className={styles.footerLink}>
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.footerLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.footerHeader}>Contact Us</h2>
          <p className={styles.footerText}>
            Email:{" "}
            <a
              href="mailto:abdelrahmaanelshaeer@yahoo.com"
              className={styles.callUs}
            >
              abdelrahmaanelshaeer@yahoo.com
            </a>
          </p>
          <p className={styles.footerText}>
            Phone:{" "}
            <a href="tel:+201091003211" className={styles.callUs}>
              +201091003211
            </a>
          </p>
          <p className={styles.footerText}>Address: Egypt, Cairo</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>
          &copy; All rights reserved to Abdelrahman Elshaer .
        </p>
      </div>
    </footer>
  );
};

export default Footerrr;
