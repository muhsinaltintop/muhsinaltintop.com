import React from 'react';
import styles from './Popup.module.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className={styles.popup}>
        <div className={styles.popup_inner}>
            {props.children}
            <button className={styles.popup_close} onClick={() => props.setTrigger(false)}>Keep navigating...</button>
            </div>
        </div>
  ) : "";
}

export default Popup;