import Previewer from "./components/previewer";
import Editor from "./components/editor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> markdown previewer</h1>
      <hr />
      <div className="container">
        <Editor />
        <Previewer />
      </div>
    </div>
  );
}

export default App;
