import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import blogFetch from "../axios/config"
import './Post.css'

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState<{ title: string, body: string }[]>([])

    // Pegar Post
    const getPost = async() => {
        try {
            const res = await blogFetch.get(`/posts/${id}`)
            const data = res.data

            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPost()
    }, [])
  return (
    <div className="post-container">
        {!post.title ? (
            <p>Carregando...</p>
        ) : (
            <div className="post">
                <h2>{post.title}</h2>
                <h2>{post.body}</h2>
            </div>
        )}
    </div>
  )
}

export default Post