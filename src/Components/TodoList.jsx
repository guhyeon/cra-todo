import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ list, onDeleteClick, onCompleteChange }) => (
  <div>
    {
      // map 함수는 배열의 항목을 돌면서 새로운 배열을 반환해주는 함수이다.
      // 리스트의 항목(listItem)들을 돌면서 <TodoListItem 목록을 만들어서 반환해주는 코드.
      list.map((listItem) => {
        const { id, text, isComplete } = listItem;
        // 리액트에서 배열값을 렌더링해줄때는 key 프로퍼티가 필요하다. 리액트에서는 변경된 값만 변경하는데, 키가없으면 뭐가 변경됐는지 어떻게알겠어?
        // 그래서 고유한 키 값이 필요
        return (
          <TodoListItem
            key={id}
            id={id}
            text={text}
            isComplete={isComplete}
            onCompleteChange={onCompleteChange}
            onDeleteClick={onDeleteClick}
          />
        );
      })
    }
  </div>
);

export default TodoList;
