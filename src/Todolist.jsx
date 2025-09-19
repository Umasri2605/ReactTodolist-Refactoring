import React from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
function Todolist() {
var [todos,SetTodos]=React.useState([
    {
        title: "Go to Goa",
        id:uuidv4(),
        status:true,
    },
    {
        title: "Purchase Grocery",
        id:uuidv4(),
        status:false,
    },
    {
        title: "Make a Dish",
        id:uuidv4(),
        status:true,
    },
    {
        title: "Pay Bills",
        id:uuidv4(),
        status:false,
    },
    {
        title: "Buy Clothes",
        id:uuidv4(),
        status:true,
    },
    
]);
function deleteTodo(id){
    // alert(id);
  SetTodos((todo)=>{
    return todo.filter((ctodo)=>{
        if(ctodo.id===id){
            return false;
        }
        else{
            return true;
        }
    })
  })
} 
  function addTodo(){
    var newTodo={
        title:document.getElementById("d1").value,
        id:uuidv4(),
    }
      SetTodos((cv)=>{
        return [...cv,newTodo]
     })
  }
   function toggleTodo(id){
    // alert(id);
    SetTodos((ctodo)=>{
        return ctodo.map((todo)=>{
            if(todo.id===id){
                todo.status=!todo.status
            }
            return todo; 
        })
    })
   }  

  return (
    <div className="border border-2 border-warning m-3 p-3">
      <h2>Todolist</h2>
      <input type="text" id="d1"/>
      <button onClick={()=>{addTodo()}}>AddTodo</button>
      <ul>
        {
           todos.map((todo,id)=>{
              return<Todo t={todo} id={id} delTodo={deleteTodo} toggle={toggleTodo}></Todo>
           })
        }
      </ul>
    </div>
  )
}

export default Todolist
