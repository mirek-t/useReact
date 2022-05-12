import React, { useReducer } from "react";

function limitRGB(number) {
  return Math.min(255, Math.max(0, number));
}

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_R":
      return Object.assign({}, state, {
        r: limitRGB(state.r + action.payload),
      });
    case "DECREMENT_R":
      return Object.assign({}, state, {
        r: limitRGB(state.r - action.payload),
      });
    case "INCREMENT_G":
      return Object.assign({}, state, {
        g: limitRGB(state.g + action.payload),
      });
    case "DECREMENT_G":
      return Object.assign({}, state, {
        g: limitRGB(state.g - action.payload),
      });
    case "INCREMENT_B":
      return Object.assign({}, state, {
        b: limitRGB(state.b + action.payload),
      });
    case "DECREMENT_B":
      return Object.assign({}, state, {
        b: limitRGB(state.b - action.payload),
      });
    default:
      return state;
  }
}

function ReducerComponent() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, {
    r: 0,
    g: 0,
    b: 0,
  });

  return (
    <>
      <h2 style={{ color: `rgb(${r},${g},${b})` }}>useReducer example</h2>
      <div>
        <span>r</span>
        <button onClick={() => dispatch({ type: "INCREMENT_R", payload: 50 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT_R", payload: 50 })}>
          -
        </button>
      </div>
      <div>
        <span>g</span>
        <button onClick={() => dispatch({ type: "INCREMENT_G", payload: 50 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT_G", payload: 50 })}>
          -
        </button>
      </div>
      <div>
        <span>b</span>
        <button onClick={() => dispatch({ type: "INCREMENT_B", payload: 50 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT_B", payload: 50 })}>
          -
        </button>
      </div>
    </>
  );
}

export default ReducerComponent;
