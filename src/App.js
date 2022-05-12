import "./App.css";
import CallbackComponent from "./Callback";
import EffectComponent from "./Effect";
import MemoComponent from "./Memo";
import ReducerComponent from "./Reducer";
import RefComponent from "./Ref";
import State from "./State";

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
    </div>
  );
}

export default App;
