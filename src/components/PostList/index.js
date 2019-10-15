import axios from 'axios'
import { useState, useEffect } from 'preact/hooks'
import style from './style'

const PostList = () => {
  const api = 'https://jsonplaceholder.typicode.com/posts'
  const [data, setData] = useState([])

  // side-effect: fetch data
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${api}`)
      // limit items to display to 5
      response.data.length = Math.min(response.data.length, 5)
      setData(response.data)
    }
    getData()
  }, [])

  return (
    <div class="post-list">
      {data.map(post => (
        <div class="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList
