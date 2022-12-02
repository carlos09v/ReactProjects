import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

function App() {
  // States - atualiza o componente
  const [message, setMessage] = useState('hello world !')
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true
    },
  ])

  // Fazendo requisição na API
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    }

    fetchTasks()
  }, []) // Sera excutado qndo tal variavel mudar

  const handleTaskClick = taskId => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = taskTitle => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        commpleted: false
      }
    ]

    setTasks(newTask)
  }

  const handleTaskDeletion = taskId => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  // JSX
  return (
    <BrowserRouter>
      <div className="container">
        {/* <button onClick={() => setMessage('State Testandoo !')}>Testar State</button> */}
				<Header />
				<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDeletion={handleTaskDeletion}
							/>
						</>
					)}
				/>
				<Route path="/:taskTitle" exact component={TaskDetails} />
			</div>
    </BrowserRouter>
    
  );
}

export default App;