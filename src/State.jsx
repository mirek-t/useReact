import { useState } from "react";

function State() {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <h1
      styles={{ color: isGreen ? "green" : "blue" }}
      onClick={() => {
        setIsGreen((prevState) => !prevState);
      }}
    >
      useState example
    </h1>
  );
}

export default State;
