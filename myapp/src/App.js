import logo from './logo.svg';
import './App.css';
import CompA from './components/CompA';
import { Contact } from './models/Contact';


function App() {
  const contacto = new Contact('pepito', 'pepardo', 'asdasd@gmail.com', false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Renderización del componente A */}
        <CompA contact={contacto}></CompA>
        
      </header>
    </div>
  );
}

export default App;
