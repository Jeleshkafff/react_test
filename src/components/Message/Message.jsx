import React from "react";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import MessageBody from "./MessageBody";
import { useParams } from "react-router-dom";

import styles from "./Message.module.css";

const Messages = [
  {
    id: 1,
    photo: "../UserLogo1.1.png",
    nameUser: "Luy Robin",
    whatDo: "online",
    message: [],
  },
  {
    id: 2,
    photo: "../UserLogo2.png",
    nameUser: "Jared Sunn",
    whatDo: "record voice message",
    message: [],
  },
];

function Message() {
  const { id } = useParams();
  console.log(id);

  let Current = Messages.find((el) => Number(el.id) === Number(id));
  if (!Current) {
    Current = {};
  }
  return (
    <div className={styles.container}>
      <MessageHeader
        key={Current.id}
        photo={Current.photo}
        nameUser={Current.nameUser}
        whatDo={Current.whatDo}
      />
      <MessageBody message={Current.message} />
      <MessageInput message={Current.message} />
    </div>
  );
}

export default Message;
