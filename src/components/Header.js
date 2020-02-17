import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  main: {
    width: '100vw',
    height: '10vw',
    background: '#f45678',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    width: '40%',
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}

const Header = props => {
  return (
    <header style={style.main}>
      <h1>MULTI ROUTE MOVIE LIST</h1>
      <nav style={style.nav}>
        <Link to="/">Movie Form</Link>
        <Link to="/confirm">Movie Confirm</Link>
        <Link to="/list">Movie List</Link>
      </nav>
    </header>
  )
}
export default Header
