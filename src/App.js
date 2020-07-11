import React from 'react';
import './App.css';
import TodoItemInput from './Components/TodoItemInput';

// 숙제. 아래 onPlusClick을 함수로 따로 빼서 만들어줘
function App() {
  return (
    <div className="App">
        <TodoItemInput 
          onPlusClick={
          (value)=>{
            // console.log("InputPlusClick from TodoItemInput" + value)
            console.log(`InputPlusClick from TodoItemInput ${value}`)
          }
        }></TodoItemInput>
        {
          // TodoList에서는 어떤 아이템이 완료됐는지, 제거해야하는지를 뱉어주는 이벤트를 속성으로 갖는다.
        }
        <TodoList 
          onDeleteClick = {(item)=>{
            console.log("App -> item", item)
          }}
          onCompleteClick = {(item)=>{
            console.log("App -> item", item)
          }}/>
    </div>
  );
}

export default App;
