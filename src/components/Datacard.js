import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { WiDaySunny, WiWindy, WiCloudy, WiLightning, WiRain} from 'react-icons/wi'

const DataContainer = styled.div`
margin: 5px 10px 5px 10px;
`
const getIcon = (tmp) => {
  if (tmp > 32) return (<WiDaySunny size='2rem' />)
  if (tmp > 29) return (<WiWindy size='2rem' />)
  if (tmp > 26) return (<WiCloudy size='2rem' />)
  if (tmp > 23) return (<WiLightning size='2rem' />)
  if (tmp < 24) return (<WiRain size='2rem' />)
  return (<WiCloudy size='2rem' />)
}
const Datacard = (props) => {
  const [temp, setTemp] = useState('')
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/current?city=${props.city}&key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => setTemp(data.data[0].temp))
      .catch(() => setTemp(''))
  }, [temp, props.city])
  return (
    <DataContainer>
      <Card style={{ width: '18rem', background: 'lightgrey', boxShadow: '5px 5px 3px grey' }}>
        <Card.Body>
          <Card.Title><h1>{props.city}</h1></Card.Title>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                Current Temperature {temp && temp + '°C'}
              </div>
              {getIcon(temp)}
            </div>
          </div>
        </Card.Body>
      </Card>
    </DataContainer>
  )
}

export default Datacard
