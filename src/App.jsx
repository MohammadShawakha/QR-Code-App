import "./App.css";
import QrGenaretor from "./qrGenaretor.jsx";
import InputCom from "./input.jsx";
import React from "react";
import { useState } from "react";

export const Context = React.createContext();
function App() {
  const [qrText, setQrText] = useState("");
  return (
    <Context.Provider value={[qrText, setQrText]}>
      <div className="container">
        <p>QR Code</p>
        <InputCom />
        <QrGenaretor />
      </div>
    </Context.Provider>
  );
}

export default App;
