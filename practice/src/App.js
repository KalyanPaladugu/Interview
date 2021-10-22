import './App.css';
import PersonsList  from './components/PersonsList';
import PersonInput from './components/PersonInput';
import API from './components/API';
import Parent from './components/Parent';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import UseStateWithObject from './components/UseStateWithObject';
import UseStateWithArray from './components/UseStateWithArray';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
function App() {
  return (
    <div className="App">
 {/* <ClassCounterOne /> */}
 <HookCounterOne />
    </div>
  );
}

export default App;
