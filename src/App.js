import "./App.css";
import EffectComponent from "./Effect";
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
    </div>
  );
}

export default App;
