import React, { Component, Fragment } from 'react'

export default class moodNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moodNews: {},
        }
    }

    componentDidMount() {
        fetch(`http://angry.pythonanywhere.com/?text=${this.props}`)
        .then(value => value.json())
        .then(value => {
            this.setState({moodNews: value})
        })
    }

    render() {
        return (
            <Fragment>
                Mood News: <strong>{this.state.moodNews.mood === "neg" ? 'negative' : 'positive'}</strong>
            </Fragment>
        )
    }
}
