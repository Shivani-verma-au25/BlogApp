import React from 'react'
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.header}>
        <h3>Merm Blog App</h3>
        <ul>
            <li>Home</li>
            <li>Add new Blog</li>
        </ul>
    </div>
  )
}

export default Header