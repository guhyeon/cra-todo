import React, {useState,useEffect} from 'react'

const TodoList = ({onDeleteClick, onCompleteChange}) => {
    const [item, setItem] = useState({id:1, value:"asdfasdf", isComplete:false})

    const handleCompleteChange = (event)=>{
        console.log("handleCompleteChange -> event.target.checked", event.target.checked)
        const {checked} = event.target;
        setItem(item_=>(
                {...item_, 
                isComplete:checked
                }
        ));
    }

    // 완료 값이 변경되고 나서 동작
    useEffect(()=>{
        onCompleteChange(item);
    },[item.isComplete])


    const handleDeleteClick = ()=>{
        onDeleteClick(item)
    }


    return (
        <div>
            <div key = "item1">
                <input type ="checkbox" onChange={handleCompleteChange}></input><span>아이템</span><button onClick={handleDeleteClick}>X</button>
            </div>
        </div>
    )
}

export default TodoList
