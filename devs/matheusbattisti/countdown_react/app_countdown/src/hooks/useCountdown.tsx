import { useState } from "react"


const useCountdown = (date: string) => {
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)

    // Colocar a logica em uma função pra setar no setInterval pra ser executada
    const countdown = () => {
        // getTime => Tempo em milisegundos
        const countDate = new Date(date).getTime() // Data Futura
        const now = new Date().getTime() // Data Atual

        const interval = countDate - now

        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        // Math.floor => arredondar pra baixo
        const dayNumber = Math.floor(interval / day)
        const hourNumber = Math.floor((interval % day) / hour)
        const minuteNumber = Math.floor((interval % hour) / minute)
        const secondNumber = Math.floor((interval % minute) / second)

        setDay(dayNumber)
        setHour(hourNumber)
        setMinute(minuteNumber)
        setSecond(secondNumber)
    }

    setInterval(countdown, 1000) // Dados serao atualizados a cada segundo

    return [day, hour, minute, second]
}

export default useCountdown