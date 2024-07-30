import { useContext, useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
import { QrContext } from "./App";

function QrGenaretor() {
  const [qrState, setQrState] = useContext(QrContext);

  return (
    <div className="qrBox" style={{ backgroundColor: qrState.secondaryColor }}>
      <QRCode
        className="qrCode"
        value={qrState.text}
        fgColor={qrState.primaryColor}
        bgColor={qrState.secondaryColor}
        level="Q"
      />
    </div>
  );
}

export default QrGenaretor;
