import React from "react";
import { useSelector } from "react-redux";
import styles from "./ChatSearch.module.css";

function ChatSearch() {
  const colorTheme = useSelector((state) => {
    return state.theme.startTheme;
  });
  return (
    <div
      className={colorTheme === "white" ? styles.container : styles.containerBl}
    >
      {/* <button className={styles.button}> <img src={"../search.svg"} alt=""></img></button> */}

      <img className={styles.icon} src={"../search.svg"} alt=""></img>
      <input
        className={colorTheme === "white" ? styles.input : styles.inputBl}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default ChatSearch;
