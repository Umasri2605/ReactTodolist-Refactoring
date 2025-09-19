import React from 'react'

function Todo(props) {
  return (
    <div className="border border-1 border-success m-3 p-3">
      <li style={{listStyle:"none"}}>
        <span style={props.t.status ? {textDecoration:"line-through"} : {}}>        {props.t.title}</span>
        <button className='btn btn-danger text-white p-1 ms-2' onClick={()=>{props.delTodo(props.t.id)}}>Delete</button>
        <button className={props.t.status ?'btn btn-primary text-white ms-3' : 'btn btn-info text-white ms-3' } onClick={()=>{props.toggle(props.t.id)}}>{props.t.status ? "Undo" :"Done"}</button>
      </li>
    </div>
  )
}

export default Todo
