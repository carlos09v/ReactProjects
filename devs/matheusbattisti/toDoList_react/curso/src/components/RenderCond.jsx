import React from 'react'

const RenderCond = ({ x, y }) => {
  return (
    <div>
        {/* If */}
        {x > 5 && <p>X é maior que 5</p>}

        {/* If / Else */}
        {x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>}

        <p>O valor de Y é : {y}</p>
        <hr />
    </div>
  )
}

export default RenderCond