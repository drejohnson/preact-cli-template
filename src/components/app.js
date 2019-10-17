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
      <Route path="/">
        <Home />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/:rest">
        <center>
          <b>404:</b> Sorry, this page isn't ready yet!
        </center>
      </Route>
    </Switch>
  </div>
)

export default App
