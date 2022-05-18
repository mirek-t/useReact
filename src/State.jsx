import { useState } from "react";
import useMyState from "./useMyState";

function State() {
  const [isGreen, setIsGreen] = useMyState(true);

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
