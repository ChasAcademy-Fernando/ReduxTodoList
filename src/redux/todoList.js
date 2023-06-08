import { createReduxModule } from "hooks-for-redux";

const initialState = {
  
  todos: [],
};


export const [useTodo, { setTodos, removeTodo, todoDone}] =
  createReduxModule("todos", initialState, {
    setTodos: (state,todo) => {
     
      return { ...state, todos:[...state.todos, todo]}
      
    },
    removeTodo: (state, todoId) => {
      return {
        ...state,
        todos: [...state.todos.filter(
          (todo) =>{
              return todo.id !== todoId
          } 
        )],
      };
    },
    todoDone: (state, todoDone) => {
      return {
          ...state,
          todos: [
              ...state.todos.map((todo) => {
                  if (todo.id == todoDone) {
                      todo.done = !todo.done;
                  }
                  return todo;
              }),
            ],}

  
    
    },}
  );


