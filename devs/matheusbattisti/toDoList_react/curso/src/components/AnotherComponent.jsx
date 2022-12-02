import React from 'react'

const AnotherComponent = () => {
    const handleClick = () => {
        console.log('Clicou !')
    }
    const nome = 'Jureg'

  return (
    <div>
        <p>Segundo Componente</p>
        <p>Nome: {nome}</p>
        <button onClick={handleClick}>Evento de Click</button>
        <button onClick={() => console
        .log('Evento Aqui !')}>Evento no Elemento !</button>
        <hr />
    </div>
  )
}

export default AnotherComponent