import React from "react";
import { useTodo } from "./redux/todoList";
import Todo from "./Todo"
export default function TodoList(){

    const {todos} = useTodo();




    return(
        <div>
            <ul>
                {todos && todos.map((todo)=>(

                    <Todo key={todo.id} id={todo.id} todo={todo.title} done={todo.done}/>
                ))}
                

            </ul>

        </div>

    )
}