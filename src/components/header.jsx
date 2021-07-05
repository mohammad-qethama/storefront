import React from 'react';
import {Typography} from '@material-ui/core';
import './header.css';
import SimpleCart from './simpleCart.jsx';
export default function header(props) {
  return (
    <div>
      <header>
      <Typography variant="h1" component="h2">
        Store 
       </Typography>
       <SimpleCart/>
      </header>
    </div>
  )
}
