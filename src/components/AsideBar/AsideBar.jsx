import React from "react";
import Navigation from "./Navigation";
import User from "./User";
import styles from "./AsideBar.module.css";
import LogOutBtn from "./LogOutBtn";
function AsideBar() {
  let i = localStorage.getItem("i");
  return (
    <aside className={Boolean(i) ? styles.asideBar : styles.asideBarBl}>
      {console.log(i) /* <img/> */}
      <User photo={"./UserPhoto.png"} nameUser="Henry Jabbawockiez" />
      <Navigation />
      <LogOutBtn label={"LOG OUT"} icon={"power.png"} />
      <button
        className={styles.btn}
        onClick={() => {
          localStorage.setItem("i", false);
        }}
      ></button>
    </aside>
  );
}
export default AsideBar;
