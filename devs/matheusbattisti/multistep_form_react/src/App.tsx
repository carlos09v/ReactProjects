import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import './App.css'

import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import UserForm from './components/UserForm'
import Steps from './components/Steps'

// Hook Personalizado
import { useForm } from './hooks/useForm'
import { useState } from 'react'

type formFields = {
  name: string,
  email: string,
  review: string,
  comment: string
}

const formTemplate: formFields = {
  name: '',
  email: '',
  review: '',
  comment: ''
}

function App() {
  const [data, setData] = useState(formTemplate)
  // Salvar value dos forms
  const updateFieldHandler = (key: string, value: string) => {
    setData(prev => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ]

  // Hook para mudar etapas
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)
  
  return (
    <div className="App">
      <header>
        <h2>Deixe sua avalização</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto !
        </p>
      </header>

      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={e => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {/* type=button => Ñ da submit ao clique */}
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <span>Voltar</span>
                <GrFormPrevious />
              </button> 
            )}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
