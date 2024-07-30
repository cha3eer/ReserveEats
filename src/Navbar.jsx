import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"; // Use CSS module

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.brand}>ReserveEats</span>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink exact to="/home" activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/about" activeClassName={styles.active}>
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/products" activeClassName={styles.active}>
              Products
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/contact" activeClassName={styles.active}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
 