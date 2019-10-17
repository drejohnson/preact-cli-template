import { h } from 'preact'
import loadable from '@loadable/component'
import style from './style'

const PostList = loadable(() => import('../../components/PostList'))

const Posts = () => {
  return (
    <div class={style.posts}>
      <h1>Post</h1>
      <PostList />
    </div>
  )
}

export default Posts
