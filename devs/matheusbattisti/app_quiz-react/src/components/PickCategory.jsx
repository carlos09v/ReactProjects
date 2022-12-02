import { QuizContext } from "../context/quiz";
import { useContext } from "react";

import './PickCategory.css'
import Category from '../img/category.svg'

const PickCategory = () => {
    const [ quizState, dispatch ] = useContext(QuizContext)

    function chooseCaregoryAndReoderQuestions(category) {
        // embaralhar as perguntas
        dispatch({ type: 'REORDER_QUESTIONS'})

        dispatch({ type: 'START_GAME', payload: category})
    }


  return (
    <div id="category">
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
        {quizState.questions.map(question => (
            <button onClick={() => chooseCaregoryAndReoderQuestions(question.category)}>
                {question.category}
            </button>
        ))}

        <img src={Category} alt="Categoria do Quiz" />
    </div>
  )
}

export default PickCategory