import React, { Component, Fragment } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import NavigationList from "./component/navigationList";
import NewsList from "./component/newsList";
import NavBar from "./component/navBar";
import Graphic from "./component/graphic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      updateNewsList: [],
      pages: [1, 2, 3, 4, 5, 6, 7, 8],
      active: 1,
      moodNews: [],
    };
  }

  componentDidMount() {
    this.fetch(this.state.active);
  }

  componentDidUpdate() {

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Container style={{ width: "800px" }} className=" mt-4 mb-5 pt-2 pb-3">
          <Router>
            <Switch>
              <Route exact path="/">
                <NewsList 
                  newsList={this.state.newsList}
                />
                <NavigationList
                  pages={this.state.pages}
                  active={this.state.active}
                  fetch={this.fetch}
                  activeButton={this.activeButton}
                />
              </Route>
              <Route exact path="/graphic" component={Graphic} />
            </Switch>
          </Router>
        </Container>
      </Fragment>
    );
  }
}

export default App;
