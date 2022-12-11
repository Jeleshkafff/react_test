import React from "react";
import { useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { useSelector } from "react-redux";

import styles from "./MessageInput.module.css";

function MessageInput({ message }) {
  const colorTheme = useSelector((state) => {
    return state.theme.startTheme;
  });
  const messageRef = useRef();
  //onEmojiClick();
  return (
    <div>
      <div
        className={
          colorTheme === "white" ? styles.container : styles.containerBl
        }
      >
        <div className={styles.body}>
          <button className={styles.btn}>
            <img src="../plus.svg" alt="" />
          </button>
          <input
            className={
              colorTheme === "white"
                ? styles.messageInput
                : styles.messageInputBl
            }
            type="text"
            placeholder="Type a message here"
            ref={messageRef}
          />
          <button className={styles.smileBtn}>
            <img src="../smileIcon.png" alt="" />;
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              message.push(messageRef.current.value);
              console.log(message);
            }}
          >
            <img src="../Send-icon.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        {/* <EmojiPicker
          onEmojiClick={() => {
            //console.log(searchPlaceholder);
          }}
        /> */}
      </div>
    </div>
  );
}

export default MessageInput;
