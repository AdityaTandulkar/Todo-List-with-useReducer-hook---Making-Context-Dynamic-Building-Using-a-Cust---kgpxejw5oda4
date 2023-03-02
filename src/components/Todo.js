import React from 'react';
const Todo = ({data, dispatch}) => {
    const {title, id} = data;
    return (
        <div className="todo">
            <div className="todo-title">
                {title}
                <button className="todo-delete" onClick={()=>dispatch({type : 'DELETE', payload : id})}>delete</button>
            </div>
        </div>
    )
}


export { Todo }

