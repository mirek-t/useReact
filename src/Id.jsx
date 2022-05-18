import { useId } from "react";

export default function Id() {
  const id = useId();
  return (
    <div>
      <h2>useId example</h2>
      <label htmlFor={id}>Input - {id}</label>
      <input type="text" id={id} />
    </div>
  );
}
