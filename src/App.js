import React from 'react';
import Products from './components/products';  
import Categories from './components/categories';
import Header from './components/header';
import Footer from './components/footer'
import ShoppingCart from './components/shoppingCart'
import ProductDetails from './components/productDetails';
import {Route,withRouter} from 'react-router-dom';
function App() {
  return (
    <>
     <Header/> 
     <Route exact path='/'>
    <Categories/>
    <Products/>
    </Route>
    <Route exact path='/product/:id'>
    <ProductDetails/>
    </Route>

    <Route exact path='/cart'>
    <ShoppingCart/>
    </Route>

    <Footer/>
    </>
  );
}

export default withRouter(App);
