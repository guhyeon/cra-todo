import React from 'react';

const TodoListItem = ({
  id, onCompleteChange, onDeleteClick, text, isComplete,
}) => {
  const handleCompleteChange = (event) => {
    console.log('handleCompleteChange -> id, event', id, event);
    onCompleteChange(id, event.target.checked);
  };

  const handleDeleteClick = () => {
    console.log('handleDeleteClick -> id', id);
    onDeleteClick(id);
  };

  return (
    <div>
      <input type="checkbox" checked={isComplete} onChange={handleCompleteChange} />
      <span>{text}</span>
      <button type="button" onClick={handleDeleteClick}>X</button>
    </div>
  );
};
export default TodoListItem;
