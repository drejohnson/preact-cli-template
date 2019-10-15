import { h } from 'preact'
import { Switch, Route } from 'wouter-preact'

import Header from './Header'

// Code-splitting is automated for routes
import Home from '../routes/Home'
import Posts from '../routes/Posts'

const App = () => (
  <div id="app">
    <Header />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      {/* <Route path='/:rest' component={Error} /> */}
    </Switch>
  </div>
)

export default App
