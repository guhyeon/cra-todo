import React, {useState,useEffect} from 'react'

const TodoListItem = ({id, onCompleteChange, onDeleteClick, text})=>{
    const handleCompleteChange = (event)=>{
        onCompleteChange(id, event.target.checked);
    }

    const handleDeleteClick = ()=>{
        onDeleteClick(id);
    }

    return(
        <div>
            <input type ="checkbox" onChange={handleCompleteChange}></input><span>{text}</span><button onClick={handleDeleteClick}>X</button>
        </div>
    )
}

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
