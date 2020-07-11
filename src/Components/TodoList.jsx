import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = ({onDeleteClick, onCompleteChange}) => {

    const handleCompleteChange = (itemId, isComplete)=>{
        // TODO 리스트에서 아이템 아이디에 맞는 항목의 완료값을 변경
        
    }

    const handleDeleteClick = (itemId)=>{
        // TODO 리스트에서 해당 아이템 제거
    }


    return (
        <div>
            <TodoListItem id = "item1" text="asdf" onCompleteChange = {handleCompleteChange} onDeleteClick = {handleDeleteClick} ></TodoListItem>
        </div>
    )
}

export default TodoList
