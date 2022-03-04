import React from "react";
import styles from "./LeftSide.module.css"
import { FaFacebook, FaFilePdf, FaGlobe, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

const LeftSide = () => {
    return ( 
        <main>
        <div className={styles.side_body}>

            <div className={styles.side_head}>Digital Marketing</div>
            
            <div className={styles.side_marketing}>
                <ul>
                <li ><FaFacebook className={styles.side_marketing_logo}/></li>
                <li>Facebook</li>
                </ul>
                <ul>
                <li><FaInstagram className={styles.side_marketing_logo} /></li>
                <li>Instagram</li>
                </ul>
                <ul>
                <li ><FaLinkedin className={styles.side_marketing_logo}/> </li>
                <li>LinkedIn</li>
                </ul>
                <ul>
                <li ><FaGoogle className={styles.side_marketing_logo}/></li>
                <li>Google</li>
                </ul>
            </div>
            <div className={styles.side_head}>Reference Companies</div>
            <div className={styles.side_marketing}>
                <ul>
                <li ><img src="public\odaksan.png" alt="odaksan-logo" /></li>
                <li>Odaksan</li>
                </ul>
                <ul>
                <li><FaInstagram className={styles.side_marketing_logo} /></li>
                <li>CTP Engineering</li>
                </ul>
                <ul>
                <li ><FaLinkedin className={styles.side_marketing_logo}/> </li>
                <li>Star Cabinets</li>
                </ul>
                <ul>
                <li ><FaGoogle className={styles.side_marketing_logo}/></li>
                <li>Google</li>
                </ul>
            </div>

        </div>
            <div >Download Cv:</div>
            <div ><FaFilePdf className={styles.cv_pdf}/></div>
        </main>
    )

}

export default LeftSide;