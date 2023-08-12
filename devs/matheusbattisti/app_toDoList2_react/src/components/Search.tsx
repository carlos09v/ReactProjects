
type SearchProps = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({...prop}: SearchProps) => {
  return (
    <div className="search">
        <h2>Pesquisar:</h2>
        <input 
            type="text" 
            value={prop.search} 
            onChange={e => prop.setSearch(e.target.value)}
            placeholder="Digite para pesquisar..." 
        />
    </div>
  )
}

export default Search