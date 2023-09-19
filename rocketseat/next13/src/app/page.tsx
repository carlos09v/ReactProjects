import { Metadata } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation' // Obs: useRouter do /navigation

// 16 - SEO
export const metadata: Metadata = {
  title: 'Home'
}


export default async function Home() {
  // const { refresh } = useRouter() // 12 = Roteamento

  // refresh() // 13 - Recarregar a pagina pra n mostrar os dados em cache. Obs: Talvze tenha outro jeito hj
  return (
    <div>
      <h1 className=''>Home</h1>
      <Link href="/auth/signin" className='button'>Login</Link>
     
      <Link href="/hide" className='absolute bottom-0 left-0 hover:bg-gray-500 hover:text-white p-3 rounded'>Hide</Link>
    </div>
  )
}
