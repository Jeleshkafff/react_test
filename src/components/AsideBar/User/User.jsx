import React from "react";
import { useSelector } from "react-redux";
import styles from "./User.module.css";
function User({ photo, nameUser }) {
  const colorTheme = useSelector((state) => {
    return state.theme.startTheme;
  });
  return (
    <div className={styles.user}>
      <div className={styles.userPhoto}>
        <img src={photo} alt="" />
      </div>
      <p
        className={colorTheme === "white" ? styles.nameUser : styles.nameUserBl}
      >
        {nameUser}
      </p>
    </div>
  );
}
export default User;
