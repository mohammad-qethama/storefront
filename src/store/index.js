import {combineReducers,createStore}  from 'redux';
// import reducer from './votes.js';
import category from './catagories';
import product from './products';
import {composeWithDevTools} from 'redux-devtools-extension'

let reducers  = combineReducers({category:category,product:product})

const store = ()=>{ 
  return createStore(reducers,composeWithDevTools());}

export default store();