import logo from './logo.svg';
import './App.css';
import Person from './/componenets/user.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        
        <Person name="daniel">hello</Person>
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
