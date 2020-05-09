import React, { Component, Fragment } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import NavigationList from "./component/navigationList";
import NewsList from "./component/newsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      updateNewsList: [],
      pages: [1, 2, 3],
      active: 1,
    };
  }

  componentDidMount() {
    this.fetch(1);
  }

  fetch = (page) => {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=us&page=${page}&apiKey=845f0c59ff1645f19a21ee1f55afd9c1`
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
        <Container
          style={{ width: "800px" }}
          className="shadow large mt-5 mb-5 pt-2 pb-3"
        >
          <NewsList newsList={this.state.newsList} />
          <NavigationList
            pages={this.state.pages}
            active={this.state.active}
            fetch={this.fetch}
            activeButton={this.activeButton}
          />
        </Container>
      </Fragment>
    );
  }
}

export default App;
