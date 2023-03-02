import React, {useState} from "react"

const AddTodo = ({ dispatch }) => {
    const [temp, setTemp] = useState('');

    function btnHandler(e){
        e.preventDefault();
        dispatch({type : "UPDATE", payload : temp});
        setTemp('');
    }
    return (
        <>
            <form id="todo-form" onSubmit={btnHandler}>
                <input type="text" id="todo-input" value={temp} onChange={(e)=>setTemp(e.target.value)}/>
                <button type="submit" onClick={btnHandler}>Add todo</button>
            </form>
        </>
    )
}

export { AddTodo }