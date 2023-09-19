import Counter from "@/components/Counter"
import Link from "next/link"

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Counter />
      <Link href="/">Home</Link>
    </div>
  )
}

export default Dashboard