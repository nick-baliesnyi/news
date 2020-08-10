import React, { Component, Fragment } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import NewsList from './components/newsList'
import NavBar from './components/navBar'
import Graphic from './components/graphic'
import Login from './pages/login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      active: 1,
      positive: 0,
      negative: 0,
      mood: 'neg',
      hasMore: true,
    }
  }

  setAuthenticated() {
    this.setState({ authenticated: true })
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Router>
          <Switch>
            <PrivateRoute
              authenticated={this.state.authenticated}
              exact
              path='/'
              render={(props) => (
                <Container
                  style={{ width: '800px', overflow: 'auto' }}
                  className=' mt-4 mb-5 pt-2 pb-3 shadow-sm'
                >
                  <NewsList />
                </Container>
              )}
            ></PrivateRoute>

            <PrivateRoute
              authenticated={this.state.authenticated}
              exact
              path='/graphic'
              component={Graphic}
            />

            <Route
              path='/login'
              render={(props) => (
                <Login
                  {...props}
                  setAuthenticated={this.setAuthenticated.bind(this)}
                />
              )}
            />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

const PrivateRoute = ({
  render: Component,
  authenticated,
  path,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      const location = {
        pathname: '/login',
        state: { from: path },
      }
      return authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={location} />
      )
    }}
  />
)

export default App
