import { h } from 'preact'
import style from './style'

import PostList from '../../components/PostList'

const Posts = () => {
  return (
    <div class={style.posts}>
      <h1>Post</h1>
      <PostList />
    </div>
  )
}

export default Posts
