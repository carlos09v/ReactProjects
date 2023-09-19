import { Metadata } from "next"
import { ReactNode } from "react"

interface AuthLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: {
        default: 'Autenticação',
        template: '%s | Autenticação'
    }
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div>
            <h1>Auth</h1>
            {children}
        </div>
    )
}