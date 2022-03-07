import React from "react";
import { Link } from "react-router-dom";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import styles from "./NavBar.module.css"


const NavBar = () => {



    return (
        <nav>
            <div className={styles.logo}>
                <Link to="/">
                
                Muhsin ALTINTOP <br /> Junior Web Developer
                </Link>
                </div>
            <div className={styles.social}><ul>
                <li><Facebook className={styles.social_logo}/></li>
                <li>
                <a
                    href="https://www.linkedin.com/in/muhsinaltintop/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram className={styles.social_logo}/>
                </a>    
                </li>
                <li>
                <a
                    href="https://www.linkedin.com/in/muhsinaltintop/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn className={styles.social_logo}/>
                    </a>
                    </li>
                </ul></div>
        </nav>
    )

}

export default NavBar;