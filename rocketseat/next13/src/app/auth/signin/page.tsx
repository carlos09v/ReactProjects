import User from "@/components/User"
import { Metadata } from "next"
import Link from "next/link"

// 16 - SEO
export const metadata: Metadata = {
  title: 'Login'
}

const SignIn = () => {
  return (
    <div>
        <h1>Login</h1>
        <div className="flex justify-around items-center">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/auth/signout" className="text-red-500 border-red-600 border box-border p-2 rounded-lg">SignOut</Link>
        </div>

        <User />
    </div>
  )
}

export default SignIn