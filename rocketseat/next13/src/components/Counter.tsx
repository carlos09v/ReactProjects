'use client' // 15 - Vai hidratar somente este componente. (Permitir o javascript)

import Link from "next/link"
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
        <h1 className="mt-6">Contador: {count}</h1>
        <button className="p-2 bg-cyan-200 cursor-pointer rounded mb-6" onClick={() => setCount(state => state + 1)}>Increment</button>
    </div>
  )
}

export default Counter