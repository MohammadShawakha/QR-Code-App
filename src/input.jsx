import { useState, useContext, useEffect } from "react";
import "./App.css";
import { QrContext } from "./App";

function InputCom() {
  const [qrState, setQrState] = useContext(QrContext);
  const [inputText, setInputText] = useState("");
  const inputChanged = (e) => {
    setInputText(e.target.value);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const temp = {
        ...qrState,
      };
      temp.text = inputText;
      setQrState(temp);
    }, 700);
    return () => clearTimeout(timeoutId);
  }, [inputText]);

  return (
    <textarea
      className="text-box"
      maxLength="1000"
      value={inputText}
      onChange={inputChanged}
      type="text"
    />
  );
}

export default InputCom;
