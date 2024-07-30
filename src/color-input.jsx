import { useState, useContext, useEffect } from "react";
import "./App.css";
import { QrContext } from "./App";

function ColorInput() {
  const [qrState, setQrState] = useContext(QrContext);

  const primaryColorChanged = (e) => {
    const temp = {
      ...qrState,
    };
    temp.primaryColor = e.target.value;
    setQrState(temp);
  };

  const secondaryColorChanged = (e) => {
    const temp = {
      ...qrState,
    };
    temp.secondaryColor = e.target.value;
    setQrState(temp);
  };
  return (
    <div className="color-input">
      <div>
        <label for="primary-color">Primary Color : </label>
        <input
          type="color"
          value={qrState.primaryColor}
          onChange={primaryColorChanged}
        ></input>
      </div>
      <div>
        <label for="secondary-color">Secondary Color : </label>
        <input
          type="color"
          value={qrState.secondaryColor}
          onChange={secondaryColorChanged}
        ></input>
      </div>
    </div>
  );
}
export default ColorInput;
