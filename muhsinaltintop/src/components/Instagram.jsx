import React from "react";
import { FaInstagram } from "react-icons/fa";
import styles from "./NavBar.module.css"


const Instagram = () => {

    const handleClick = () => {
        window.open ("https://www.instagram.com/muhsinaltintop/", "_blank");
    };

    return (
        <div>
            <FaInstagram className={styles.social_logo} onClick={handleClick}/>

        </div>
    )


}

export default Instagram;