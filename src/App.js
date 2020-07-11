import React from 'react';
import './App.css';
import TodoItemInput from './Components/TodoItemInput';
import TodoList from './Components/TodoList'

// 숙제. 아래 onPlusClick을 함수로 따로 빼서 만들어줘
function App() {
  // TODO 리스트 아이템을 추가
  // 이벤트시 리스트 아이템을 추가해주려면
  // 1. 스테이트인 리스트데이터를 이곳에서 관리하거나
  // 2. 리스트 컴포넌트에 추가한 아이템을 이벤트를 통해 넘겨주거나 하는 방법이있다.
  // 1번은 스테이트 끌어올리기란 방법이고. 아주 중요하다
  // 2번은 별로 권장하지 않는 방법.
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
            console.log("App -> onDeleteClick", item)
          }}
          onCompleteChange = {(item)=>{
            console.log("App -> onCompleteChange", item)
          }}/>
    </div>
  );
}

export default App;
