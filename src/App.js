import React, { Component, Fragment } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewsList from './component/newsList'
import NavBar from './component/navBar'
import Graphic from './component/graphic'
import Login from './component/login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
    }
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Container
                style={{ width: '800px', overflow: 'auto' }}
                className=' mt-4 mb-5 pt-2 pb-3 shadow-sm'
              >
                <NewsList />
              </Container>
            </Route>
            <Route exact path='/graphic' component={Graphic} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default App
