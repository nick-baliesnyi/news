import React from 'react'
import { Container } from 'react-bootstrap'
import Chart from '../components/chart'

function Stats(props) {
  return (
    <Container
      className=' pt-5 pb-5 mt-4'
      style={{ width: '1100px', height: '800px' }}
    >
      <Chart />
    </Container>
  )
}

export default Stats
