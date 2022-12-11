import React from "react";
import ChatHeader from "./ChatHeader";
import ChatSearch from "./ChatSearch/ChatSearch";
import ChatMessage from "./ChatMessage";

import styles from "./ChatWindow.module.css";
import { useSelector } from "react-redux";

let arrMessages = [
  {
    id: 1,
    icon: "./UserLogo1.1.png",
    nameUser: "Luy Robin",
    whatDo: "writes",
    lastMessage: "1 minute ago",
    messageText: `Most of its text is made up from sections 1.10.32–3 of Cicero's De
  finibus bonorum et malorum (On the Boundaries of Goods and Evils;
  finibus may also be translated as purposes).`,
    newMessages: 2,
  },
  {
    id: 2,
    icon: "./UserLogo2.png",
    nameUser: "Jared Sunn",
    whatDo: "records voice message",
    lastMessage: "1 minutes ago",
    voice: "01:15",
    file: 2,
    photo: 1,
  },
  {
    id: 3,
    icon: "./UserLogo2.png",
    nameUser: "Nika Jerrardo",
    whatDo: "last online 5 hours ago",
    lastMessage: "3 days ago",
    messageText: `Cicero famously orated against his political
   opponent Lucius Sergius Catilina.`,
    newMessages: "",
  },
  {
    id: 4,
    icon: "./UserLogo2.png",
    nameUser: "Nika Jerrardo",
    whatDo: "last online 5 hours ago",
    lastMessage: "3 days ago",
    messageText: `Cicero famously orated against his political
   opponent Lucius Sergius Catilina.`,
    newMessages: "",
    photo: 1,
  },
  {
    id: 5,
    icon: "./UserLogo2.png",
    nameUser: "Nika Jerrardo",
    whatDo: "last online 5 hours ago",
    lastMessage: "3 days ago",
    messageText: `Cicero famously orated against his political
   opponent Lucius Sergius Catilina.`,
    newMessages: "",
  },
];
function ChatWindow() {
  const colorTheme = useSelector((state) => {
    return state.theme.startTheme;
  });
  return (
    <div className={styles.container}>
      <ChatHeader />
      <ChatSearch />
      <nav>
        <ul className={styles.list}>
          {arrMessages.map(
            ({
              id,
              icon,
              nameUser,
              whatDo,
              lastMessage,
              messageText,
              newMessages,
              file,
              photo,
            }) => (
              <li
                key={id}
                className={
                  colorTheme === "white" ? styles.listItem : styles.listItemBl
                }
              >
                <ChatMessage
                  href={"chat/" + id}
                  key={id}
                  icon={icon}
                  nameUser={nameUser}
                  whatDo={whatDo}
                  lastMessage={lastMessage}
                  messageText={messageText}
                  newMessages={newMessages}
                  file={file}
                  photo={photo}
                />
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
}

export default ChatWindow;
