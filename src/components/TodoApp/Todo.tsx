import Button from "../Button/Button"

type TodoProps = {
    id: number,
    text: string,
    deleteTodo : (id:number) => void
}


const Todo = (props : TodoProps) => {

    // const handleEditClick = () => {
    //     props.editTodo(props.id, props.text);
    // }

    const handleDeleteClick = () => {
        props.deleteTodo(props.id);
    }

  return (
    <div className="bg-white p-3 border-b-2 flex justify-between items-center">
        <p className="text-sm text-gray-500">{props.text }</p>
        <div>
            {/* <Button className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded" handleClick={handleEditClick}>Edit</Button> */}
            <Button className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded" handleClick={handleDeleteClick}>Delete</Button>
        </div>
    </div>
  )
}

export default Todo