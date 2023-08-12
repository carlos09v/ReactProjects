
interface FilterProps {
    filter: string
    setFilter: React.Dispatch<React.SetStateAction<string>>
    setSort: React.Dispatch<React.SetStateAction<string>>
}

const Filter = ({...prop}: FilterProps) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={prop.filter} onChange={e => prop.setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => prop.setSort('Asc')}>Asc</button>
                <button onClick={() => prop.setSort('Desc')}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter