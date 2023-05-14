import logo from './logo.svg';
import './App.css';
import SwapiPeople from './components/SwapiPeople';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SwapiPeople/>
      </header>
    </div>
  );
}

export default App;
