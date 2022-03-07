import React from "react";
import styles from "./LeftSide.module.css"
import { FaFacebook, FaFilePdf, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

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
            <div className={styles.side_reference}>
            <a
                    href="https://www.odaksan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <ul>
                <li className={styles.side_reference_li}><img src="odaksan.png" alt="odaksan-logo" /></li>
                <li>Odaksan</li>
                </ul>
            </a>
            <a
                    href="https://www.susogutmakulesi.com.tr/"
                    target="_blank"
                    rel="noopener noreferrer"
            >
                <ul>
                <li className={styles.side_reference_li}><img src="ctp.png" alt="ctp-logo" /></li>
                <li>CTP Engineering</li>
                </ul>
            </a>    
            <a
                    href="https://odysseycounselling.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
            >
                <ul>
                <li className={styles.side_reference_li}><img src="odyssey.png" alt="odaksan-logo" /></li>
                <li>Odyssey Counselling</li>
                </ul>
            </a>
            <a
                    href="https://www.starcabinets.com/"
                    target="_blank"
                    rel="noopener noreferrer"
            >
                <ul>
                <li className={styles.side_reference_li}><img src="starcabinet.png" alt="odaksan-logo" /></li>
                <li>Star Cabinets</li>
                </ul>
            </a>
            </div>

        </div>
        <a
                    href="../DM_CV_Muhsin_Altintop.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
            >
            <div >Download Cv:</div>
            <div ><FaFilePdf className={styles.cv_pdf}/></div>
        </a>
        </main>
    )

}

export default LeftSide;