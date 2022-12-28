
import './Title.css'

const Title = ({ title, eventColor }: { title: string | null, eventColor: string | null }) => {
  return <h1 className="title" style={ { color: eventColor ?? undefined }}>{title}</h1>
}

export default Title