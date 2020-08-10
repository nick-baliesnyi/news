import React, { useState, useEffect } from 'react'
import styles from '../animation/animations'
import { Button, Card } from 'react-bootstrap'
import { StyleRoot } from 'radium'
import MoodNews from './moodNews'
import InfiniteScroll from 'react-infinite-scroll-component'
import mockEvents from '../mock/events.json'
import { newsService } from '../services/news'

const getDateString = (secTimestamp) => {
  const timestamp = secTimestamp * 1000
  const lowerCaseString = new Date(timestamp).toLocaleDateString('uk', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return lowerCaseString[0].toUpperCase() + lowerCaseString.slice(1)
}

const NewsList = (props) => {
  const [newsList, setNewsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorLoadingNews, setErrorLoadingNews] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchNews()
  }, [])

  function fetchNews() {
    console.log('fetching news page:', page)
    newsService.fetch()
      .then(data => {
        console.log('data', data)
      })
      .catch(err => {
        console.log('err', err)
      })
    setLoading(true)
    // // TODO: uncomment when backend is updated
    // return axios
    //   .get('/events/1')
    //   .then((res) => {
    //     page++
    //     return res.data.events
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //     return []
    //   })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockEvents.events)
      }, 1000)
    })
      .then((newNews) => {
        setNewsList(newsList.concat(newNews))
        setPage(page + 1)
      })
      .catch((err) => setErrorLoadingNews(true))
      .finally(() => setLoading(false))
  }

  return (
    <InfiniteScroll
      dataLength={newsList.length}
      next={() => fetchNews()}
      hasMore={true}
      loader={<h5>Завантажуємо...</h5>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Це всі новини, що є.</b>
        </p>
      }
    >
      {newsList.map((el) => (
        <StyleRoot key={el.id}>
          <div style={styles.fadeIn}>
            <Card style={{ width: '100%' }} className='mt-2'>
              <Card.Body>
                <Card.Title>
                  <a href={el.link}>{el.title}</a>
                </Card.Title>
                <Card.Text>
                  <MoodNews addMood={props.addMood} text={el.text} />
                </Card.Text>
                <Card.Text>
                  <small>
                    {el.author ? el.author : 'unknown'} |{' '}
                    {getDateString(el.date_published)}
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </StyleRoot>
      ))}
    </InfiniteScroll>
  )
}

export default NewsList
