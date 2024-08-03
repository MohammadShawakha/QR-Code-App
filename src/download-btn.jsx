import { useState } from "react";

function DownloadBtn(props) {
  const [locked, setLocked] = useState(false);
  function onClick() {
    if (!locked) {
      setLocked(true);
      props.handleClick();
      setTimeout(() => {
        setLocked(false);
      }, 7000);
    }
  }
  return (
    <button className="Download" disabled={locked} onClick={onClick}>
      Download
    </button>
  );
}
export default DownloadBtn;
