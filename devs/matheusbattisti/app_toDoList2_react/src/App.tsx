import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

  const addToDo = (text: string, category: string) => {
    const newToDos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      }
    ]

    setTodos(newToDos)
  }

  const removeToDo = (id: number) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id: number) => {
    const newTodos = [...todos]
    newTodos.map(todo => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className='todo-list'>
        {todos
          .filter(todo => filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted
          ).filter(todo =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          ).sort((a, b) => sort == 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
          ).map(todo => (
            <Todo key={todo.id} {...todo} removeTodo={removeToDo} completeTodo={completeTodo} />
          ))}
      </div>

      <TodoForm addToDo={addToDo} />
    </div>

  )
}

export default App
