import { h } from 'preact'
import ActiveLink from '../ActiveLink'
import style from './style'

const Header = () => {
  return (
    <header class={style.header}>
      <h1>Preact App</h1>
      <nav>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/posts">Posts</ActiveLink>
      </nav>
    </header>
  )
}

export default Header
