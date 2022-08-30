// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      < PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      < PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      < PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      < PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
}

export default App; 