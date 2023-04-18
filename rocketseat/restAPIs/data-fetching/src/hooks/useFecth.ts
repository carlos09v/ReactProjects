import axios, { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"

const api = axios.create({
    baseURL: 'https://api.github.com'
})

// Hook de Consumo de Dados => Data Fetch
// Generics TypeScript
// Unknown != Any
export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true) // Loading State
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        api.get(url, options)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setIsFetching(false))
    }, [])

    return { data, error, isFetching }
}

