import { useState, useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./App";

function InputCom() {
  const [qrText, setQrText] = useContext(Context);
  const [inputText, setInputText] = useState("");
  const inputChanged = (e) => {
    setInputText(e.target.value);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => setQrText(inputText), 700);
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
