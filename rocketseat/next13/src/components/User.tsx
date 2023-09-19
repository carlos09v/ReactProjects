import Repo from "./Repo"
import { cookies, headers } from 'next/headers'
import { Suspense } from 'react'

const User = async () => {
    // Server-side First || Dynamic First
    // 5. fecthing data - Static
    const response = await fetch('https://api.github.com/users/carlos09v', {
        next: {
            revalidate: 30 // Recarregar a cada 30seg
        },
        cache: 'no-store' // Sem guardar nada em cache - SSR (Server-side Rendering)
    })
    const user = await response.json()

    // 9. acessando cookies e headers
    const userCookies = cookies()
    const userHeaders = headers()

    return (
        <div>
            <h1>User:</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>

            {/* <pre>{JSON.stringify(userCookies.get(''), null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(userHeaders.entries(), null, 2)}</pre> */}

            {/* 10 - Utilizando Suspense API */}
            <Suspense fallback={<p>Carregando repositórios...</p>}>
                <Repo />
            </Suspense>
        </div>
    )
}

export default User