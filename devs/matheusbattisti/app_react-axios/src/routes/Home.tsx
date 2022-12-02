import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import blogFetch from '../axios/config'
import './Home.css'

const Home = () => {
  const [posts, setPosts] = useState([])

  // Acessar a REST API (JSONPlaceholder)
  const getPosts = async() => {
    try {
      const res = await blogFetch.get('/posts')
      const data = res.data

      console.log(data)
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className='home'>
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) :
      (
        posts.map((post: { id: number, title: string, body: string }) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <h2>{post.body}</h2>
            <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home