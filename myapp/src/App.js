import logo from './logo.svg';
import './App.css';
import PersonsList from './components/PersonsList'
import PersonInput from './components/PersonInput'
function App() {
  return (
    <div className="App">
      <PersonInput />
    <PersonsList />
    </div>
  );
}

export default App;
