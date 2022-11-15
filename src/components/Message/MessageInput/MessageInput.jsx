import React from "react";
import { useRef } from "react";
import EmojiPicker from "emoji-picker-react";

import styles from "./MessageInput.module.css";

function MessageInput({ message }) {
  const messageRef = useRef();
  //onEmojiClick();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.body}>
          <button className={styles.btn}>
            <img src="../plus.svg" alt="" />
          </button>
          <input
            className={styles.messageInput}
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
        <EmojiPicker
          onEmojiClick={() => {
            //console.log(searchPlaceholder);
          }}
        />
      </div>
    </div>
  );
}

export default MessageInput;
