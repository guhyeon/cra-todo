import React,{useState, useEffect} from 'react'
import TodoListItem from './TodoListItem';

const TodoList = ({onDeleteClick, onCompleteChange}) => {
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
        // TODO 리스트에서 아이템 아이디에 맞는 항목의 완료값을 변경
        
    }

    const handleDeleteClick = (itemId)=>{
        // TODO 리스트에서 해당 아이템 제거
    }


    return (
        <div>
            {
                // map 함수는 배열의 항목을 돌면서 새로운 배열을 반환해주는 함수이다.
                // 리스트의 항목(listItem)들을 돌면서 <TodoListItem 목록을 만들어서 반환해주는 코드.
                list.map((listItem)=>            
                {
                    const {id, text} = listItem;
                    // 리액트에서 배열값을 렌더링해줄때는 key 프로퍼티가 필요하다. 리액트에서는 변경된 값만 변경하는데, 키가없으면 뭐가 변경됐는지 어떻게알겠어?
                    // 그래서 고유한 키 값이 필요
                    return (
                        <TodoListItem key={id} id = {id} text={text} onCompleteChange = {handleCompleteChange} onDeleteClick = {handleDeleteClick} ></TodoListItem>
                    )
                })
            }
        </div>
    )
}

export default TodoList
