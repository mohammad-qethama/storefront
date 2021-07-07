const initialState = {
  products:[],
  cartItems:0,
  showList:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState,action)=>{
  // eslint-disable-next-line no-unused-vars
  let {type,payload}= action;
  switch (type) {
   

    case 'DECREMENT':

      let newState;
      let isUpdated = false;
      if (!(state.products.length)){
        payload.cartCount = 1;
        isUpdated = true;
        newState =  [...state.products,payload]
         }else{

          newState =  state.products.map(product=>{
            if (product.item === payload.item)
             { 
              isUpdated = true; 
              return Object.assign({}
                ,product
                  ,{cartCount:product.cartCount+1 })
            
            
            }else{
              return product;
            }
          })

        } 
        if(!(isUpdated)) 
          {   
              payload.cartCount = 1;
              newState = [...state.products,payload]
          }
        let newCount = state.cartItems+1;
        
      return {products: newState,cartItems:newCount,showList:state.showList};

    case 'SHOW_CART':
      return Object.assign({}
         ,state
          ,{showList:payload })

    case 'REMOVE_FROM_CART':
      let newList = state.products.filter(product => product._id !== payload._id)
      return {products:newList,cartItems:state.cartItems-payload.cartCount,showList:state.showList}
    default:
      return state;
      




  }

  

}

export let showCart = (payload)=>({
type:'SHOW_CART',
payload:payload
})



