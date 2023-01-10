import logo from './logo.svg';
import './App.css';
import CompA from './components/CompA';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Renderización del componente A */}
        <CompA></CompA>
        
      </header>
    </div>
  );
}

export default App;
