import React, { useState } from "react";
import { removeTodo,todoDone } from "./redux/todoList";

export default function Todo({todo, done, id}){
    
    
    function handleComplete(){
        
    todoDone(id);
    

    }
    function handleNotComplete(){
        
    todoDone(id);
    

    }
    function handleDelete(){
        removeTodo(id)
    }
    return(
    <div>
        <li className=" flex space-x-3 space-y-4 items-center">
            <div className=" text-base">
            {todo}
            
            </div>
            {done? (

                <button className=" p-2 rounded-2xl bg-gray-500" onClick={handleNotComplete}>Done</button>
            ):(
                <button className=" p-2 rounded-2xl bg-orange-500"onClick={handleComplete}>Done?</button>
            )}
            
            <button onClick={handleDelete}>Delete</button>
        </li>

    </div>

    )
}