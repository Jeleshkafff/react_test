import React from "react";
/* import ChatBar from "../ChatBar/ChatBar";
import MessagesBar from "../MessagesBar/MessagesBar"; */
import ChatWindow from "../ChatWindow/ChatWindow";
import { Route, Routes } from "react-router-dom";
import Message from "../Message/Message";

import styles from "./MainWindow.module.css";

function MainWindow() {
  return (
    <main className={styles.main}>
      <ChatWindow />
      <Routes>
        <Route path=":id" element={<Message />} />
      </Routes>

      {/* <ChatBar />
            <MessagesBar /> */}
    </main>
  );
}

export default MainWindow;
