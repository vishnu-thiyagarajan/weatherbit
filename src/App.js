import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavigationBar'
import SideNav from './components/SideNav'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App () {
  const [active, setActive] = useState('')
  const handleActive = (country) => setActive(country)
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <SideNav onhandleActive={handleActive} active={active} />
        <Switch>
          <Route exact path='/home/:country'><Home active={active} /></Route>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
