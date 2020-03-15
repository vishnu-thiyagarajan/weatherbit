import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'

const StyledSideNav = styled.div`   
    position: fixed;
    width: 20%;
    height: 100%;
    z-index: 1;
    top: 4.5em;
    background-color: #222;
    overflow-x: hidden;
    padding-top: 10px;
`

const SideNav = (props) => {
  const [items, setItems] = useState([
    {
      name: 'China',
      key: 1
    },
    {
      name: 'Russia',
      key: 2
    },
    {
      name: 'USA',
      key: 3
    },
    {
      name: 'Canada',
      key: 4
    },
    {
      name: 'India',
      key: 5
    }
  ])
  const onItemClick = (name) => props.handleActive(name)
  return (
    <StyledSideNav>
      {
        items.map((item) => {
          return (
            <NavItem
              name={item.name}
              onItemClick={onItemClick}
              active={item.name === props.active}
              key={item.key}
            />
          )
        })
      }
    </StyledSideNav>
  )
}

const StyledNavItem = styled.div`
    width: 100%;
    word-break:break-all;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    a {
        font-size: 1.5em;
        color: ${(props) => props.active ? '#EC7063' : 'white'};
        :hover {
            opacity: 0.7;
            text-decoration: none;
        }
    }
`
const NavItem = (props) => {
  const selectItem = () => props.onItemClick(props.name)
  return (
    <StyledNavItem active={props.active}>
      <BrowserRouter>
        <Link to={`/home/${props.name}`} onClick={selectItem}>
          {props.name}
        </Link>
      </BrowserRouter>
    </StyledNavItem>
  )
}

export default SideNav
