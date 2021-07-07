import axios from 'axios';
import {decrement} from './products'
const api = 'https://api-server-0.herokuapp.com/products';


export const getProducts = ()=>(dispatch)=>{
  return axios.get(api).then(res=>{
    // console.log(res.data)
    dispatch(getAction(res.data));
  })
}

export function postItem(body) {

  return async function createItemThunk(dispatch){

    return axios.post(`${api}`,body,{
      headers:{
        mode:'cors',
        cache:'no-cache',
        'Content-Type':'application/json'
      }
    }).then(data=>console.log(data)).catch(error=> console.error(error))

  }
}

export function putItems(id,add=false) {
     
 
  return async function updateItemThunk(dispatch, getState){
    console.log(id)
    let x;
    let toCart;
    if(add){
      toCart = getState().cart.products.filter(product=> product._id===id)[0];
      x = getState().product.products.filter(product=> product._id===id)[0] ;
      console.log('b',x.inventory);
      x.inventory = x.inventory+toCart.cartCount; 
      console.log('a',x.inventory);

    }else{
      x = getState().product.products.filter(product=> product._id===id)[0]

    x.inventory = x.inventory-1;
  }
    

    return axios.put(`${api}/${id}`,x,{
      headers:{
        mode:'cors',
        cache:'no-cache',
        'Content-Type':'application/json'
      }
    }).then(data=>{
       dispatch(putAction(data.data));
       (add) ?  dispatch (rmFromCart(toCart)) : dispatch(decrement(data.data));
      } )
        .catch(error=> console.error(error))

  }
}



  // return (const putProduct= ()=>(dispatch,getState)=> axios.put(`${api}/${id}`,body).then())
  


// // Write a synchronous outer function that receives the `text` parameter:
// export function saveNewTodo(text) {
//   // And then creates and returns the async thunk function:
//   return async function saveNewTodoThunk(dispatch, getState) {
//     // ✅ Now we can use the text value and send it to the server
//     const initialTodo = { text }
//     const response = await client.post('/fakeApi/todos', { todo: initialTodo })
//     dispatch({ type: 'todos/todoAdded', payload: response.todo })
//   }
// }


export const getAction = (data)=>{
  return{
    type:'GET',
    payload:data
  }
}

export const putAction = (data)=>{
  return{
    type:'PUT',
    payload:data
  }
}
export const rmFromCart = (payload)=>{
  return{
    type:'REMOVE_FROM_CART',
    payload:payload
  }
}