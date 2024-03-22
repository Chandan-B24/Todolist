import Todo from "./Todo"

type TodoListProps = {
    todos : {
        id:number,
        text : string
    }[],
    deleteTodo : (id:number) => void
}

const TodoList = (props : TodoListProps) => {

  return (
    <div className='mt-5 p-3 shadow-lg w-full rounded-xl'>
        {props.todos.map((item)=>{
            return <Todo key={item.id} id={item.id} text={item.text}  deleteTodo={props.deleteTodo}/>
        }) }
       
    </div>
  )
}

export default TodoList