import TodoList from './TodoList'
import AddTodo from './AddTodo'


function App() {


  return (
     <div className=' text-center'>
          <h1>Todo list</h1>
          <AddTodo/>
          <div className=' flex justify-center p-4'>
          <TodoList/>
          </div>
          
    </div>
  )
}

export default App
