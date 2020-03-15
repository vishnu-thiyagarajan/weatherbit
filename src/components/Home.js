import React, { useEffect } from 'react'
import styled from 'styled-components'
import Datacard from './Datacard'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-left: 21%;
`
const Home = (props) => {
  useEffect(() => {}, [props.cities])
  return (
    <Container>
      {props.cities && props.cities.map((city, index) => {
        return (<Datacard key={index} city={city} />)
      })}
    </Container>
  )
}

export default Home
