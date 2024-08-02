import { useContext, useRef, useEffect, forwardRef } from "react";
import "./App.css";
import QRCode from "react-qr-code";
import { QrContext } from "./App";

const QrGenaretor = forwardRef(function QrGenaretor(props, ref) {
  const [qrState, setQrState] = useContext(QrContext);

  return (
    <>
      <div
        ref={ref}
        className="qrBox"
        style={{ backgroundColor: qrState.secondaryColor }}
      >
        <QRCode
          className="qrCode"
          value={qrState.text}
          fgColor={qrState.primaryColor}
          bgColor={qrState.secondaryColor}
          level="Q"
        />
      </div>
    </>
  );
});

export default QrGenaretor;
