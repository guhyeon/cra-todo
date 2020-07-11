import React from 'react'

const TodoListItem = ({id, onCompleteChange, onDeleteClick, text})=>{
    const handleCompleteChange = (event)=>{
        console.log("handleCompleteChange -> id, event",id , event)
        onCompleteChange(id, event.target.checked);
    }

    const handleDeleteClick = ()=>{
        console.log("handleDeleteClick -> id", id)
        onDeleteClick(id);
    }

    return(
        <div>
            <input type ="checkbox" onChange={handleCompleteChange}></input><span>{text}</span><button onClick={handleDeleteClick}>X</button>
        </div>
    )
}
export default TodoListItem;