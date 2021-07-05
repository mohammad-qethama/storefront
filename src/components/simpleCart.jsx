import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {Button,Menu,MenuItem} from '@material-ui/core';
import {showCart} from '../store/cart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 


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
  
  return(
    <div>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handelClick}>
    <ShoppingCartIcon/> {state.cartItems.cartItems}
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={state.cartItems.showList}
      keepMounted
      open={Boolean(state.cartItems.showList)}
      onClose={handelClose}
    >
    { state.cartItems.products.map(product =>
      <MenuItem  onClick={handelClose}> {product.name}  ( {product.cartCount} )</MenuItem>)
      }

    </Menu>
  </div>
  )

}

export default SimpleCart;
