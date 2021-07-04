import React from 'react';
import Products from './components/products';  
import Categories from './components/categories';
import Header from './components/header';
import Footer from './components/footer'
function App() {
  return (
    <>
     <Header/> 
    <Categories/>
    <Products/>
    <Footer/>
    </>
  );
}

export default App;
