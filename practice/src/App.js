import './App.css';
import PersonsList  from './components/PersonsList';
import PersonInput from './components/PersonInput';
import API from './components/API';
import Parent from './components/Parent';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
function App() {
  return (
    <div className="App">
     <ClickCounter />
  <HoverCounter />
    </div>
  );
}

export default App;
