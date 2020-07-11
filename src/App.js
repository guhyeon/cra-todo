import React,{useState, useEffect} from 'react';
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
  const [list, setList] = useState([]);

  // 더미 리스트 생성 훅스. todoList가 생성되고나서 한 번만 생성한다. 두 번째 인자인 deps에 []. 
  useEffect(()=>{
    const dummyList = [
        {id:0, text:"a", isComplete:false},
        {id:1, text:"B", isComplete:true},
        {id:2, text:"C", isComplete:false},
        {id:3, text:"D", isComplete:true}
    ]
    setList(dummyList)
  },[])


  const handleCompleteChange = (itemId, isComplete)=>{
      console.log("handleCompleteChange -> itemId, isComplete", itemId, isComplete)
      // TODO 리스트에서 아이템 아이디에 맞는 항목의 완료값을 변경
      
  }

  const handleDeleteClick = (itemId)=>{
      console.log("handleDeleteClick -> itemId", itemId)
      // TODO 리스트에서 해당 아이템 제거
  }

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
          list={list}
          onDeleteClick = {handleDeleteClick}
          onCompleteChange = {handleCompleteChange}/>
    </div>
  );
}

export default App;
