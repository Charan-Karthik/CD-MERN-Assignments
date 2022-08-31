import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import Main from "./components/Main"

function App() {
  return (
    <div className="Main">
      <div className="App">
        < Header />
        <div className="Body">
          < Navigation />
          < Main />
        </div>
      </div>
    </div>

  );
}

export default App;
