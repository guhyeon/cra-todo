import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItemInput from './Components/TodoItemInput';
import TodoList from './Components/TodoList';
import Person from './Components/Person';

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
  useEffect(() => {
    const dummyList = [
      { id: 0, text: 'a', isComplete: false },
      { id: 1, text: 'B', isComplete: true },
      { id: 2, text: 'C', isComplete: false },
      { id: 3, text: 'D', isComplete: true },
    ];
    setList(dummyList);
  }, []);

  const handleCompleteChange = (itemId, isComplete) => {
    console.log(
      'handleCompleteChange -> itemId, isComplete',
      itemId,
      isComplete,
    );
    // 리스트에서 아이템 아이디에 맞는 항목의 완료값을 변경
    setList((oldList) => {
      const newList = oldList.map((item) => {
        if (item.id === itemId) {
          return { ...item, isComplete };
        }
        return item;
      });
      return newList;
    });
  };

  const handleDeleteClick = (itemId) => {
    console.log('handleDeleteClick -> itemId', itemId);
    // 리스트에서 해당 아이템 제거
    setList((oldList) => oldList.filter((item) => item.id !== itemId));
  };

  const handlePlusClick = (value) => {
    console.log(`InputPlusClick from TodoItemInput ${value}`);
    setList((oldList) => {
      const id = oldList.length + 1;
      return [
        ...oldList,
        { id, text: value, isComplete: false }, // newItem
      ];
    });
  };

  return (
    <div className="App">
      <Person name="개똥이1" lifeSpan={40} initialAge={20} />
      <Person name="개똥이2" lifeSpan={40} initialAge={22} />
      <Person name="개똥이3" lifeSpan={26} initialAge={23} />
      <Person name="개똥이4" lifeSpan={80} initialAge={24} />

      {/* <TodoItemInput onPlusClick={handlePlusClick} />
      <TodoList
        list={list}
        onDeleteClick={handleDeleteClick}
        onCompleteChange={handleCompleteChange}
      /> */}
    </div>
  );
}

export default App;
