import {combineReducers,createStore,applyMiddleware}  from 'redux';
// import reducer from './votes.js';
import category from './catagories';
import product from './products';
import cart from './cart.js';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'

let reducers  = combineReducers({category:category,product:product,cart:cart})

const store = ()=>{ 
  return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));}

export default store();