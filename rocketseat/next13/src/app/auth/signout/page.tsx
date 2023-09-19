import { Metadata } from "next"
import Link from "next/link"

// 16 - SEO
export const metadata: Metadata = {
  title: 'Sign Out'
}


const SignOut = () => {
  return (
    <div>
        <h1>Deslogado com sucesso!</h1>
        <Link href="/">Home</Link>
    </div>
  )
}

export default SignOut