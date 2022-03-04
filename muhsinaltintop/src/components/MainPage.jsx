import React from "react";
import LeftSide from "./LeftSide";
import styles from "./MainPage.module.css"
import RightSide from "./RightSide";

const MainPage = () => {
    return ( 
        <main>
            <div className={styles.main_left_side}><LeftSide/></div>
            <div className={styles.main_right_side}><RightSide/></div>
        </main>
    )

}

export default MainPage;