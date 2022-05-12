import { useState } from "react";

function State() {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <h1
      style={{ color: isGreen ? "green" : "blue" }}
      onClick={() => {
        // setIsGreen(!isGreen);
        setIsGreen((prevState) => !prevState); //poprzedni stan
      }}
    >
      useState example
    </h1>
  );
}

export default State;
