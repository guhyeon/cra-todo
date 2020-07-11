import React from 'react';
import logo from './logo.svg';
import './App.css';
import test from './images/test.jpeg'
import TodoItemInput from './Components/TodoItemInput';

// 숙제. 아래 onPlusClick을 함수로 따로 빼서 만들어줘
function App() {
  return (
    <div className="App">
        <TodoItemInput onPlusClick={
          (value)=>{
            // console.log("InputPlusClick from TodoItemInput" + value)
            console.log(`InputPlusClick from TodoItemInput ${value}`)
          }
        } ></TodoItemInput>
    </div>
  );
}

export default App;
