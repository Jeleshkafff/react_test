import React from "react";
import styles from "./MessageHeader.module.css";
import { useSelector } from "react-redux";
function MessageHeader({ photo, nameUser, whatDo }) {
  const colorTheme = useSelector((state) => {
    return state.theme.startTheme;
  });
  return (
    <div className={colorTheme === "white" ? styles.header : styles.headerBl}>
      <div className={styles.person}>
        <img src={photo} alt="" />
        <div className={styles.infoUser}>
          <div className={styles.nameStatus}>
            <p>{nameUser}</p>
            <div className={styles.WhatDo}>
              {/* <img src="" alt="" /> */}
              <p>{whatDo}</p>
            </div>
          </div>
          <div
            className={
              colorTheme === "white" ? styles.buttons : styles.buttonsBl
            }
          >
            <button>
              <img src="../attach-2.svg" alt="" />
            </button>
            <button>
              <img src="../more-vertical.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageHeader;
