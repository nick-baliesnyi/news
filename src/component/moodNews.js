import React, { Component, Fragment } from "react";



export default class MoodNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moodNews: {},
    };
  }

  componentDidMount() {
    fetch(`http://angry.pythonanywhere.com/?text=${this.props}`)
      .then((value) => value.json())
      .then((value) => {
        this.setState({ moodNews: value });
      });
  }

  render() {
    return (
      <Fragment>
        Mood News:{" "}
        {this.state.moodNews.mood === "neg" ? (
          <span class="badge badge-danger">negative</span>
        ) : (
          <span class="badge badge-success">negative</span>
        )}
      </Fragment>
    );
  }
}
