/* eslint react/no-did-mount-set-state: 0 */
import React  										    from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'

import MoviesList  from './Movies/MoviesList'
import MovieDetail from './Movies/MovieDetail'

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
		  <h1 className={'title'}>Test</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
)

export default App
