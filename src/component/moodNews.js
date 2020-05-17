import React, { Component, Fragment } from "react";



export default class MoodNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moodNews: {},
    };
  }

  async componentDidMount() {
     await fetch(`http://angry.pythonanywhere.com/?text=${this.props}`)
      .then((value) => value.json())
      .then((value) => {
        this.setState({ moodNews: value });
      });

      this.props.addMood(this.state.moodNews.mood)

      
  }


  render() {
    return (
      <Fragment>
        Mood News:{" "}
        {this.state.moodNews.mood === "neg" ? (
          <span className="badge badge-danger">negative</span>
        ) : (
          <span className="badge badge-success">positive</span>
        )}
      </Fragment>
    );
  }
}
