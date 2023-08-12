import { useState, FormEvent } from "react"

const TodoForm = ({ addToDo }: any) => {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // Validar
        if (!value || !category) return alert('Informe os dados !')
        
        // adicionar
        addToDo(value, category)
        
        // Limpar campos
        setCategory('')
        setValue('')
    }

  return (
    <div className="todo-form">
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Digite o título" onChange={e => setValue(e.target.value)}
                value={value}
            />
            <select onChange={e => setCategory(e.target.value)} value={category}>
                <option value="">Selecione uma categoria:</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm