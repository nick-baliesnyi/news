import React, { Component, Fragment } from 'react'

export default class MoodNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moodNews: {},
    }
  }

  async componentDidMount() {
    await fetch(`http://angry.pythonanywhere.com/?text=${this.props.text}`)
      .then((value) => value.json())
      .then((value) => {
        this.setState({ moodNews: value })
      })
  }

  render() {
    let tonality = ''

    switch (this.state.moodNews.mood) {
      case 'neg':
        tonality = <span className='badge badge-danger'>Негативна</span>
        break
      case 'pos':
        tonality = <span className='badge badge-success'>Позитивна</span>
        break
      default:
        tonality = <span className='badge badge-secondary'>Нейтральна</span>
    }

    return tonality
  }
}
