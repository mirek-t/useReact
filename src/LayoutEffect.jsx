import { useState, useLayoutEffect, useRef } from "react";

function LayoutEffect() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const refTextArea = useRef(null);
  useLayoutEffect(() => {
    setWidth(refTextArea.current.clientWidth);
    setHeight(refTextArea.current.clientHeight);
    console.dir(refTextArea.current);
  });

  return (
    <div>
      <h2>useLayoutEffect example</h2>
      <p>Textarea width: {width}</p>
      <p>Textarea height: {height}</p>
      <textarea
        ref={refTextArea}
        onClick={() => {
          setWidth(0);
        }}
      />
    </div>
  );
}

export default LayoutEffect;
