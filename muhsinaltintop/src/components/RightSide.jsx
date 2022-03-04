import React from "react";
import { FaCss3, FaFilePdf, FaHtml5, FaJsSquare, FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiFlutter, SiPostgresql, SiDart } from "react-icons/si";
import styles from "./LeftSide.module.css"

const RightSide = () => {
    return ( 
        <main>
        <div className={styles.side_body}>

            <div className={styles.side_head}>Coding</div>
            
            <div className={styles.side_marketing}>
                <ul>
                <li ><FaJsSquare className={styles.side_marketing_logo}/></li>
                <li>JavaScript</li>
                </ul>
                <ul>
                <li><SiDart className={styles.side_marketing_logo} /></li>
                <li>Dart</li>
                </ul>
                <ul>
                <li><FaReact className={styles.side_marketing_logo} /></li>
                <li>React</li>
                </ul>
                <ul>
                <li ><FaNode className={styles.side_marketing_logo}/> </li>
                <li>NodeJS</li>
                </ul>
                <ul>
                <li ><SiFlutter className={styles.side_marketing_logo}/></li>
                <li>Flutter</li>
                </ul>
            </div>
            <div className={styles.side_marketing}>
                <ul>
                <li ><FaHtml5 className={styles.side_marketing_logo}/></li>
                <li>HTML5</li>
                </ul>
                <ul>
                <li><FaCss3 className={styles.side_marketing_logo} /></li>
                <li>CSS3</li>
                </ul>
                <ul>
                <li ><SiExpress className={styles.side_marketing_logo}/> </li>
                <li>Express</li>
                </ul>
                <ul>
                <li ><SiPostgresql className={styles.side_marketing_logo}/></li>
                <li>PostgreSQL</li>
                </ul>
            </div>
            
        </div>
        <div >Download Cv:</div>
            <div ><FaFilePdf className={styles.cv_pdf}/></div>
        </main>
    )

}

export default RightSide;