import React from "react";
import Navigation from "./Navigation";
import User from "./User";
import styles from "./AsideBar.module.css";
import LogOutBtn from "./LogOutBtn";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeMode } from "../../models/theme";
function AsideBar() {
  const colorTheme = useSelector((state) => {
    return state.theme.startTheme;
  });
  const dispatch = useDispatch();
  return (
    <aside
      className={colorTheme === "white" ? styles.asideBar : styles.asideBarBl}
    >
      {console.log(colorTheme) /* <img/> */}
      <User photo={"./UserPhoto.png"} nameUser="Henry Jabbawockiez" />
      <Navigation />
      <LogOutBtn label={"LOG OUT"} icon={"power.png"} />
      <button
        className={styles.btn}
        onClick={() => {
          if (colorTheme === "dark") {
            // localStorage.setItem("colorTheme", "white");
            dispatch(changeThemeMode({ color: "white" }));
          } else {
            // localStorage.setItem("colorTheme", "dark");
            dispatch(changeThemeMode({ color: "dark" }));
          }
        }}
      >
        6yhbgtg
      </button>
    </aside>
  );
}
export default AsideBar;
