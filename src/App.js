import React from 'react';
import logo from './logo.svg';
import mj from './mj.jpg';
import './App.css';
import TodoItemInput from './Components/TodoItemInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={mj} alt="logo" /> */}  
        <TodoItemInput onPlusClick ={ (value) => {console.log("InputValue", value)}}></TodoItemInput>
      </header>
    </div>
  );
}

export default App;
