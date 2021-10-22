import React from 'react';
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
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import ReduceCount from './components/ReduceCount';

export const UserContext=React.createContext()
export const ChanelContext=React.createContext()
function App() {
  return (
    <div className="App">

{/* <UserContext.Provider value={"Kalyan"}>
  <ChanelContext.Provider value={"98.3"}>
  <ComponentC />
    </ChanelContext.Provider>

  </UserContext.Provider> */}

  <ReduceCount />

 
    </div>
  );
}

export default App;
