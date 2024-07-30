import "./App.css";
import QrGenaretor from "./qrGenaretor.jsx";
import InputCom from "./input.jsx";
import React from "react";
import { useState } from "react";
import ColorInput from "./color-input.jsx";

export const QrContext = React.createContext();
function App() {
  const [qrState, setQrState] = useState({
    text: "",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
  });

  return (
    <QrContext.Provider value={[qrState, setQrState]}>
      <div className="container">
        <p>QR Code</p>
        <InputCom />
        <QrGenaretor />
        <ColorInput />
      </div>
    </QrContext.Provider>
  );
}

export default App;
