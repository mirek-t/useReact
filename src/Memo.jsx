import React, { useMemo, useState } from "react";

function fibonacci(num) {
  if (num < 1) return 0;
  if (num <= 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function MemoComponent() {
  const [num, setNum] = useState(0);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <h2
        style={{ color: isGreen ? "green" : "blue" }}
        onClick={() => {
          setIsGreen((prevState) => !prevState); //poprzedni stan
        }}
      >
        useMemo example
      </h2>
      <h3>
        Fibonacci of {num} is {fib}?
      </h3>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
}

export default MemoComponent;
