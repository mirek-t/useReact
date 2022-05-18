import { useDebugValue, useEffect, useState } from "react";

function useIsRaining() {
  const [isRaining, setIsRaining] = useState(false);
  useEffect(() => {
    setIsRaining(Math.random() > 0.5);
  }, []);

  useDebugValue(isRaining ? "Is raining" : "Is not raining", (value) => {
    return `It ${value.toLowerCase()} ${isRaining ? "🌧️" : "🌞"}`;
  });

  return isRaining;
}

function DebugValue() {
  const isRaining = useIsRaining();
  return (
    <div>
      <h2>useDebugValue example</h2>
      <p>Do you need a coat today? {isRaining ? "Yes" : "No, thank you"}</p>
    </div>
  );
}

export default DebugValue;
