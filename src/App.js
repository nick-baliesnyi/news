import React, { Component, Fragment, ReactDOM } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import NavigationList from "./component/navigationList";
import NewsList from "./component/newsList";
import NavBar from "./component/navBar";
import Graphic from "./component/graphic"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      updateNewsList: [],
      pages: [1, 2, 3, 4, 6, 7, 8],
      active: 1,
      fakeJson: {
        mood: "negative",
        proba: [0.5866836191571672, 0.15884564271098353, 0.25447073813184934],
        text:
          "\u044f \u0442\u0435\u0431\u044f \u043d\u0435\u043d\u0430\u0432\u0438\u0436\u0443",
      },
    };
  }

  componentDidMount() {
    this.fetch(this.state.active);
  }

  componentDidUpdate() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  fetch = (page) => {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page}&apiKey=845f0c59ff1645f19a21ee1f55afd9c1`
    )
      .then((value) => value.json())
      .then((value) => {
        this.setState({ newsList: value.articles });
      });
  };

  activeButton = (el) => {
    this.setState({ active: el });
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container
          style={{ width: "800px" }}
          className="shadow large mt-5 mb-5 pt-2 pb-3"
        >
          <Router>
            <Switch>
              <Route exact path="/">
                <NewsList
                  newsList={this.state.newsList}
                  fakeJson={this.state.fakeJson}
                />
                <NavigationList
                  pages={this.state.pages}
                  active={this.state.active}
                  fetch={this.fetch}
                  activeButton={this.activeButton}
                />
              </Route>
              <Route exact path="/graphic" component={Graphic}/>
            </Switch>
          </Router>
        </Container>
      </Fragment>
    );
  }
}

export default App;
