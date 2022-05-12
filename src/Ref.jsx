import React, { useRef, useState } from "react";

function RefComponent() {
  const [number, setNumber] = useState(0);
  const numRef = useRef(0);
  const inputRef = useRef(null);

  function incrementAndDelayLogging() {
    setNumber(number + 1);
    numRef.current++;
    setTimeout(() => {
      alert(`state: ${number}, ref: ${numRef.current}`);
    }, 1000);

    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "peru";
  }

  return (
    <div>
      <h2>useRef example</h2>
      <button onClick={incrementAndDelayLogging}>Delay logging</button>
      <input type="text" ref={inputRef} />
      <h4>State: {number}</h4>
      <h4>Ref: {numRef.current}</h4>
    </div>
  );
}

export default RefComponent;
