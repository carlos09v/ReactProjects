import { createContext, ReactNode, useState } from "react"

type EventProps = {
    title: string
    date: string
    image: string
    color: string
}

interface CountdownContextProps {
    event: EventProps | null
    setEvent: any
}

export const CountdownContext = createContext({} as CountdownContextProps)

export const CountdownProvider = ({ children }: { children: ReactNode}) => {
    const [event, setEvent] = useState(null)

  return (
    <CountdownContext.Provider value={{ event, setEvent }}>
        {children}
    </CountdownContext.Provider>
  )
}