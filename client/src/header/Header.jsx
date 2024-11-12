import React from 'react'
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={classes.header}>
        <h3>Merm Blog App</h3>
        <ul>
            <Link to='/' >Home</Link>
            <Link to={'/add'} >Add new Blog</Link>
        </ul>
    </div>
  )
}

export default Header