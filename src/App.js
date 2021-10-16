import logo from './logo.svg';
import './App.css';
import Editor from './components/editor'
import Previewer from './components/previewer';
function App() {
  return (
    <div className="App">
      markdown previewer <br/>
      <Editor/> <br/><hr/>
      <Previewer/>
    </div>
  );
}

export default App;
