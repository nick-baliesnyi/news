import React, { Component, Fragment } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsList from "./component/newsList";
import NavBar from "./component/navBar";
import Graphic from "./component/graphic";
import LoginPage from "./component/LoginPage";
import NewsCounter from "./component/newsCounter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      active: 1,
      positive: 0,
      negative: 0,
      mood: "neg",
      hasMore: true
    };
  }

  componentDidMount() {
    this.fetch()
    //window.addEventListener('scroll', this.onScroll);

    fetch("https://viknubackend.pythonanywhere.com/stats/1")
      .then((value) => value.json())
      .then((value) => {
        console.log(value);
      });
  }

  fetch = (props) => {

    if(this.state.newsList.length >= 35) {
      this.setState({hasMore: false})
      return
    }
    fetch(
      `http://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${props}&apiKey=845f0c59ff1645f19a21ee1f55afd9c1`
    )
      .then((value) => value.json())
      .then((value) => {
        console.log(value)
        const newArr = this.state.newsList
        value.articles.forEach(el => {
          newArr.push(el)
        })

        this.setState({newsList: newArr})
      });
      this.setState({active: this.state.active + 1})
      console.log(this.state.active)
  };

  activeButton = (el) => {
    this.setState({ active: el, positive: 0, negative: 0 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  addMood = (mood) => {
    console.log(mood);
    if (mood === "neg") {
      let updNeg = this.state.negative;
      updNeg++;
      this.setState({ negative: updNeg });
    } else {
      let updPos = this.state.positive;
      updPos++;
      this.setState({ positive: updPos });
    }
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Container
                style={{ width: "800px", overflow: "auto" }}
                className=" mt-4 mb-5 pt-2 pb-3 shadow-sm"
              >
                <NewsCounter
                  negative={this.state.negative}
                  positive={this.state.positive}
                />
                <InfiniteScroll
                  dataLength={this.state.newsList.length}
                  next={() => this.fetch(this.state.active)}
                  hasMore={this.state.hasMore}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{textAlign: 'center'}}>
                      <b>The end</b>
                    </p>
                  }
                >
                  <NewsList
                    newsList={this.state.newsList}
                    addMood={this.addMood}
                  />
                </InfiniteScroll>
              </Container>
            </Route>
            <Route exact path="/graphic" component={Graphic} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
