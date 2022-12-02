import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Quiz from "../img/quiz.svg"

import './Welcome.css'
// Comando "rafce" - da extenção react snippets

const Welcome = () => {
    // Context
    // quizState - pega os valores
    // dispatch - altera os valores
    const [ quizState, dispatch ] = useContext(QuizContext)

    return (
        <div id='welcome'>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>Iniciar</button>
            <img src={Quiz} alt="Quiz Logo" />
        </div>
    )
}

export default Welcome