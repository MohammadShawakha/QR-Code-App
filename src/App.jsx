import "./App.css";
import QrGenaretor from "./qrGenaretor.jsx";
import InputCom from "./input.jsx";
import React from "react";
import { useState, useRef } from "react";
import ColorInput from "./color-input.jsx";
import DownloadBtn from "./download-btn.jsx";
import html2canvas from "html2canvas";

export const QrContext = React.createContext();
function App() {
  const [qrState, setQrState] = useState({
    text: "",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
  });
  const qrRef = useRef();

  function handleClick() {
    html2canvas(qrRef.current)
      .then((canvas) => {
        let image = canvas.toDataURL("image/jpeg");
        const a = document.createElement("a");
        a.href = image;
        a.download = "QR-Code.jpeg";
        a.click();
        //document.body.appendChild(canvas);
      })
      .catch((err) => {
        console.error("Some Thing Went Wrong");
      });
  }
  return (
    <QrContext.Provider value={[qrState, setQrState]}>
      <div className="container">
        <p>QR Code</p>
        <InputCom />
        <QrGenaretor ref={qrRef} />
        <ColorInput />
        <DownloadBtn className="Download" handleClick={handleClick} />
      </div>
    </QrContext.Provider>
  );
}

export default App;
