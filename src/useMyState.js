import { useState } from "react";

var state;

export default function useMyState(initialState) {
  const [stan, setStan] = useState(true);
  if (state === undefined) {
    state = initialState;
    if (initialState instanceof Function) {
      state = initialState();
    }
  }

  function setState(currentState) {
    if (currentState instanceof Function) {
      state = currentState(state);
    } else {
      state = currentState;
    }
    setStan(!stan);
    console.log(state);
  }

  return [state, setState];
}
