import { setTodos, useTodo } from "./redux/todoList";
import { useState } from "react";
export default function AddTodo() {
    const [todoTitle, setTodo] = useState();
    const {todos} = useTodo();
   
   

    function handleAddTodo(e) {
      e.preventDefault()
      const todo = {
        title: todoTitle,
        id: Date.now(),
        done: false
      };
      setTodos(todo);
      setTodo("")
    }
  
    return (
      <div className="">
       
        <form action="submit" onSubmit={handleAddTodo}>
        <label>What do you need to do?</label>
        <input className=" outline outline-1" type="text" value={todoTitle} onChange={(e) => setTodo(e.target.value)} />
  
         
        <button onClick={handleAddTodo}>Add Question</button>
        </form>
      </div>
    );}