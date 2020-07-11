import React, {Fragment, useState, useEffect} from 'react';


// const TodoItemInput = ()=>{
// function TodoListInput (){
// }
// const TodoItemInput = function(){

const OptionalVisibleButton = ({visible, onClick})=>{
    if(visible){
        return(<button onClick={onClick}>+</button>)
    }
    return null;
}

// const person = {
//     name:"전구현",
//     age:10,
//     isHandsome:true
// }


// const name = person.name;
// const age = person.age;
// const isHandsome = person.isHandsome;
// --------------아래와 같은 문법---------
// const { name,age,isHandsome } = person;



// const TodoItemInput = ({onPlusClick}) => {
    // -----------아래와 같은 의미
// const TodoItemInput = (props) => {
//     const {onPlusClick} = props;

const TodoItemInput = ({onPlusClick}) => {
    // 변경되는 입력값이 있을때 +버튼 노출
    // +를 누르면 추가 이벤트를 발생시키면 된다.
    
    const [ inputValue, setInputValue ] = useState("");

    useEffect(()=>{
        console.log(inputValue);
    }, [inputValue]);

    const handleChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    // const returnAvalue = ()=>{
    //     return "a";
    // }
    // const returnAvalue = ()=>("a");


    const handlePlusClick = ()=>{
        console.log("handlePlusClick");
        onPlusClick(inputValue);
    }


    return (
        <Fragment>
            <input type="text" value={inputValue} 
                onChange = {handleChangeInput}>
            </input>
            {
                // inputValue &&(<button>+</button>)
            }
            <OptionalVisibleButton visible={inputValue} onClick={handlePlusClick}></OptionalVisibleButton>
        </Fragment>
    );
}

export default TodoItemInput;