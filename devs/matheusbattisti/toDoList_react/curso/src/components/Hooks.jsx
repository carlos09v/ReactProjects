import React from 'react'
import { useState, useEffect } from 'react'

const Hooks = () => {
    // UseState
    let idade = 30
    const [novaIdade, setNovaIdade] = useState(40)

    const changeAge = () => {
        idade = 31
        // Warning: o valor ñ muda, pra isso serve o state (hook)
    }
    const changeNewAge = () => {
        setNovaIdade(45)
        // O valor irá alterar no html
    }

    // useEffect
    useEffect(() => {
        // Sempre que mudar o State, o Effect sera executado !
        
    })
  return (
    <div>
        <p>Idade: {idade}</p>
        <button onClick={changeAge}>Mudar idade</button>

        <p>Idade: {novaIdade}</p>
        <button onClick={changeNewAge}>Mudar nova idade</button>
        <hr />
    </div>
  )
}

export default Hooks