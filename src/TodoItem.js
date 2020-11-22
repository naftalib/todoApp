import React from "react"


function TodoItem(props){

    const checkedStyle = {
            color: "grey",
            textDecoration: "line-through"
    }

    return(
        <div className= 'todo-item'>

        <input 
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.update(props.item.id)}
        />

        <p style={props.item.completed ? checkedStyle : null }>{props.item.text}</p>

        </div>

        )

}
export default TodoItem







