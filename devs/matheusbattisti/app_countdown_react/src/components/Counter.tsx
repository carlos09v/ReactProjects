
import './Counter.css'

const Counter = ({ title, number, eventColor }: { title: string, number: number, eventColor: string | null }) => {
  return (
    <div className="counter">
        <p className="counter-number" style={{ backgroundColor: eventColor ?? undefined }}>{number}</p>
        <h3 className="counter-text" style={{ color: eventColor ?? undefined }}>{title}</h3>
    </div>
  )
}

export default Counter