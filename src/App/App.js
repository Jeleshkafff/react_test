import React from "react";
import AsideBar from "../components/AsideBar/AsideBar";
// import ChatWindow from "../components/ChatWindow";
import MainWindow from "../components/MainWindow/MainWindow";
// import Message from "../components/Message";
// import Example from "../components/Routers/Routers";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readThemeMode } from "../models/theme";

function App() {
  const colorTheme = useSelector((state) => {
    return state.theme.startTheme;
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(readThemeMode());
    //Navigate("/")
  }, []);
  return (
    <div className={colorTheme === "white" ? styles.App : styles.AppBl}>
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
