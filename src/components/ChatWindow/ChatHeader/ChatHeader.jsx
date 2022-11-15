import React from "react";
import { useSelector } from "react-redux";
import styles from "./ChatHeader.module.css";
function ChatHeader() {
  const colorTheme = useSelector((state) => {
    return state.theme.startTheme;
  });
  return (
    <div className={styles.header}>
      <h1 className={colorTheme === "white" ? styles.h : styles.hBl}>Chats</h1>
      <button
        className={colorTheme === "white" ? styles.button : styles.buttonBl}
      >
        + Create New Chat
      </button>
    </div>
  );
}

export default ChatHeader;
