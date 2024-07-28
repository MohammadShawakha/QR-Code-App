import { useContext, useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
import { Context } from "./App";

function QrGenaretor() {
  const [qrText, setQrText] = useContext(Context);

  return (
    <div className="qrBox">
      <QRCode className="qrCode" value={qrText} />
    </div>
  );
}

export default QrGenaretor;
