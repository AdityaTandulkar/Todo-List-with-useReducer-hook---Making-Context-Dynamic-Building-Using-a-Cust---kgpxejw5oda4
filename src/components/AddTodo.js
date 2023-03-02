import React, {useState} from "react"

const AddTodo = ({ dispatch }) => {
    const [temp, setTemp] = useState('');

    function btnHandler(){
        dispatch({type : "UPDATE", payload : temp});
        setTemp('');
    }
    return (
        <>
            <div id="todo-form">
                <input type="text" id="todo-input" value={temp} onChange={(e)=>setTemp(e.target.value)}/>
                <button type="submit" onClick={btnHandler}>Add todo</button>
            </div>
        </>
    )
}

export { AddTodo }