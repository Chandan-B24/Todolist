import { useState } from "react"
import Button from "../Button/Button"
import Heading from "../Heading/Heading"
import Input from "../Input/Input"
import TodoList from "./TodoList"

type Todo = {
  id :number,
  text : string
}


const TodoApp = () => {

    const [inputValue,setInputValue] = useState<string>('')
    const [todo,setTodo] = useState<Todo[]>([]);
    const [showTodo,setShowTodo] = useState<boolean>(false)  

      
    const handleChange = (value : string) =>{
          setInputValue(value)
    }

    const insertTodo = ():void =>{
      
      if(inputValue.trim() !== ''){
        const newTodo:Todo = {
          id : new Date().getTime(),
          text : inputValue
        } 
        setTodo([...todo,newTodo])
        setShowTodo(true)
        setInputValue(' ')
      }
      else { 
        console.log('please enter the proper value to add')
      }
    }

    // const editTodo = (id:number,text:string):void =>{
    //     const editedTask = {}
    // }

    const deleteTodo = (id:number):void =>{
      const updatedTasks = todo.filter(task => task.id !== id);
      setTodo(updatedTasks);
      
    }


  return (
    <div className="h-[60vh] w-full flex justify-center items-center flex-col gap-3 p-64">
        <Heading className="text-3xl text-blue-500 font-bold mb-8">To do Application</Heading>
        <div className="w-full flex justify-center items-center">
          <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 mx-2" type="text" onChange={handleChange} placeholder = "please enter your todo's here" required value = {inputValue}/>
          <Button className="bg-blue-400 mx-2 p-2 rounded-xl text-white w-[10%]" handleClick={insertTodo}>Add Task</Button>
        </div>
       {showTodo ? <TodoList todos={todo}  deleteTodo = {deleteTodo}/> : null}
    </div>
  )
}

export default TodoApp


