import "./App.css";
import CallbackComponent from "./Callback";
import EffectComponent from "./Effect";
import MemoComponent from "./Memo";
import ReducerComponent from "./Reducer";
import RefComponent from "./Ref";
import State from "./State";
import LayoutEffect from "./LayoutEffect";
import ImperativeHandle from "./ImperativeHandle";
import DebugValue from "./DebugValue";
import Id from "./Id";

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
      <ImperativeHandle />
      <hr />
      <DebugValue />
      <hr />
      <Id />
      <hr />
    </div>
  );
}

export default App;
