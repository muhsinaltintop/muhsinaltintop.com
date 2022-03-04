import React from "react";
import { FaAt } from "react-icons/fa";
import styles from "./NavBar.module.css"


const Footer = () => {
    return (
        <nav>
            <div className={styles.logo}>2022 © Muhsin ALTINTOP </div>
            <div className={styles.social}><ul>
                <li><FaAt/> muhsin.altintop@gmail.com</li>
                </ul></div>
        </nav>
    )

}

export default Footer;