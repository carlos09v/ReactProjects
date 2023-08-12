
interface TodoTypes {
    id: number
    text: string
    category: string
    isCompleted: boolean
    removeTodo: (id: number) => void
    completeTodo: (id: number) => void
}

const Todo = ({ ...todo }: TodoTypes) => {
    return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            <div className="content">
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </div>
            <div>
                <button className="complete" onClick={() => todo.completeTodo(todo.id)}>Completar</button>
                <button className="remove" onClick={() => todo.removeTodo(todo.id)}>x</button>
            </div>
        </div>
    )
}

export default Todo