import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styles from "./NavBar.module.css"


const LinkedIn = () => {

    const handleClick = () => {
        window.open ("https://www.linkedin.com/in/muhsinaltintop/", "_blank");
    };

    return (
        <div>
            <FaLinkedin className={styles.social_logo} onClick={handleClick}/>

        </div>
    )


}

export default LinkedIn;