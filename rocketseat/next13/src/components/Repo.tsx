
const Repo = async () => {
    // Server-side First || Dynamic First
    // 6. fecthing data in component - Static
    const response = await fetch('https://api.github.com/users/carlos09v/repos', {
        next: {
            revalidate: 30 // Recarregar a cada 30seg
        },
        cache: 'no-store' // Sem guardar nada em cache - SSR (Server-side Rendering)
    })
    const repos = await response.json()



  return (
    <div>
        <h1>Repos:</h1>
        <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}

export default Repo