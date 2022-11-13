import React from "react";
import AsideBar from "../components/AsideBar/AsideBar";
// import ChatWindow from "../components/ChatWindow";
import MainWindow from "../components/MainWindow/MainWindow";
// import Message from "../components/Message";
// import Example from "../components/Routers/Routers";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";

function App() {
  React.useEffect(() => {
    //Navigate("/")
  });
  return (
    <div className={styles.App}>
      na
      <AsideBar />
      {/* <ChatWindow /> */}
      <Routes>
        <Route path="/chat/*" element={<MainWindow />} />
      </Routes>
      {/* <Message />
      <Example /> */}
    </div>
  );
}

export default App;
