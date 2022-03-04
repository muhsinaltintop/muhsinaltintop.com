import React from "react";
import { FaFacebook } from "react-icons/fa";
import styles from "./NavBar.module.css"


const Facebook = () => {

    const handleClick = () => {
        window.open ("https://www.facebook.com/MuhsinAltintop", "_blank");
    };

    return (
        <div>
            <FaFacebook className={styles.social_logo} onClick={handleClick}/>

        </div>
    )


}

export default Facebook;