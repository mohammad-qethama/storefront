import React from 'react';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './header.css';
import SimpleCart from './simpleCart.jsx';
export default function header(props) {
  return (
    <div>
      <header>
      <Typography variant="h1" component="h2">
       <Link to='/'>
       
        Store 
       </Link>
       </Typography>
       <SimpleCart/>
      </header>
    </div>
  )
}
