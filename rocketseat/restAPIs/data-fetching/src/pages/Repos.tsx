import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
// import { useFetch } from './hooks/useFecth'

export type Repository = {
  full_name: string
  description: string
}

export function Repos() {
  // RestAPI do GitHub
  // Hook Personalizado
  // Rename data => repositories
  // const { data: repositories, isFetching, error } = useFetch<Repository[]>('/users/carlos09v/repos')

  // Lib React-Query
  const { data: repositories, isFetching, error } = useQuery<Repository[]>('repos', async() => {
    const res = await axios.get('https://api.github.com/users/carlos09v/repos')

    return res.data
  }, {
    // Refetch qndo voltar pra pagina
    // refetchOnWindowFocus: false

    // Salvar em Cache => (pra n realizar outra requisição)
    staleTime: 1000 * 60 // 1 minute
  }) 

  return (
    <div className="App">
      <ul>
        { isFetching && <p>Carregando...</p> }
        {repositories?.map(repo => (
          <li key={repo.full_name}>
            <Link to={`/repos/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
