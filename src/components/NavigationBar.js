import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    position:fixed;
    height: 4.5rem;
    top: 0;
    width: 100%;
    z-index: 9999 !important;
    background-color: #EC7063;
  }
  .logo{
    font-size: 7vh;
    font-weight: bold;
    text-shadow: 5px 5px 5px black;
    color: white;
    &:hover { color: grey; }
  }
`

const NavigationBar = () => (
  <Styles>
    <Navbar expand='lg'>
      <div className='logo'>Weatherbit</div>
    </Navbar>
  </Styles>
)

export default NavigationBar
