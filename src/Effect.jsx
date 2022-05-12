import { useEffect, useState } from "react";

function EffectComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return <div>useEffect example: {time.toLocaleTimeString()}</div>;
}

export default EffectComponent;
