import React from "react";
import styles from "./MessageBody.module.css";

function MessageBody({ message }) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>
          <img src="../UserLogo2.png" alt="" />
        </div>
        <div className={styles.MessageContent}>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <div>
          <img src="../UserLogo2.png" alt="" />
        </div>
        <div className={styles.MessageContent}>Hello. How are you?</div>
      </div>
      {message.map((item, index) => {
        return (
          <div className={styles.item}>
            <div>
              <img src="../UserLogo2.png" alt="" />
            </div>
            <div className={styles.MessageContent} key={index}>
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default MessageBody;
