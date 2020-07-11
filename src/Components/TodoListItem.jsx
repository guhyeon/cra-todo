import React from 'react'

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
export default TodoListItem;