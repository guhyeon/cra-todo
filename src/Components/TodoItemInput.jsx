import React, { Fragment, useState, useEffect } from 'react';



const TodoItemInput = ({onPlusClick}) => {
    // console.log ("TodoItemInputo" , TodoItemInput);
    //변경되는 입력값이 있고
    //이벤트 발생시키기
    //+ 버튼 클릭시  리스트에 추가 
    //입력 완료됬을때 

    /**사용법 암기 */
    const [ inputValue  , setInputValue] = useState(""); //함수사용방법
    //ex const inputValue = ""; 

    useEffect(()=>{
        console.log("inputValue", inputValue);
    },[inputValue]);
    /**사용법 암기 */


    const handlePlusClick = ()=> {
        console.log("handlePlusClick -> handlePlusClick", handlePlusClick);
        onPlusClick(inputValue);
    }

    return (<Fragment>
        <input type="text" value={inputValue} onChange={(event)=> setInputValue(event.target.value)}></input>
        {inputValue&&(<button onClick = {handlePlusClick}>+</button> )}       
        </Fragment>);
}

export default TodoItemInput;
