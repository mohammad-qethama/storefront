import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {Button,Menu,MenuItem} from '@material-ui/core';
import {showCart} from '../store/cart';
import {putItems} from '../store/actions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import './simpleCart.css';


const SimpleCart = (props)=>{
  const state = useSelector(state =>{
    return{
      cartItems:state.cart 
    }
  })
 const dispatch = useDispatch();
 
 const handelClick = (event) =>{
  dispatch(showCart(event.currentTarget))
 }
 const handelClose = (event) =>{
  dispatch(showCart(null))
 }
 const handelRemove = (event)=>{
  console.log(event.currentTarget)
  dispatch(putItems(event.currentTarget.id,true))
 }
  return(
    <div>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handelClick}>
    <ShoppingCartIcon/> {state.cartItems.cartItems}
    </Button>
    <Button>
      <Link to='/cart'>
      
      Cart Page
      </Link>
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={state.cartItems.showList}
      keepMounted
      open={Boolean(state.cartItems.showList)}
      onClose={handelClose}
    >
    { state.cartItems.products.map(product =>
      
      <MenuItem className='mT'  key={product._id} > <span>{product.item} </span> <span> ({product.cartCount})</span> <span className='smT' onClick={handelRemove} id={product._id}><DeleteIcon/></span> </MenuItem>)
      }

    </Menu>
  </div>
  )

}

export default SimpleCart;
