import "./App.css";
import CallbackComponent from "./Callback";
import EffectComponent from "./Effect";
import MemoComponent from "./Memo";
import ReducerComponent from "./Reducer";
import RefComponent from "./Ref";
import State from "./State";
import LayoutEffect from "./LayoutEffect";

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <EffectComponent />
      <hr />
      <RefComponent />
      <hr />
      <ReducerComponent />
      <hr />
      <MemoComponent />
      <hr />
      <CallbackComponent />
      <hr />
      <LayoutEffect />
      <hr />
    </div>
  );
}

export default App;
