let initialState = {
  products:[
      {}
  ]
}

// initialState = initialState.products.map(product =>  Object.assign({},product,{visible:true}));
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState,action)=>{
  // eslint-disable-next-line no-unused-vars
  let {type,payload}= action;
  switch (type) {
    case 'FILTER_CATEGORY':
      // state = initialState;
    

      let shownList= state.products.map(product => (product.category === payload)?Object.assign({},product,{visible:true}) : Object.assign({},product,{visible:false}) );
      return  {products:shownList};
    case 'SHOW_ALL':
      let listShown = state.products.map(product =>  Object.assign({},product,{visible:true}));
      return  {products:listShown};
      
    case 'INCREMENT':
      let updatedListINC = state.products.map(product=>{
        return (product.name === payload.name)? product.inventoryCount = product.inventoryCount+1: product; 
      })
      return {products: updatedListINC};
      
    case 'PUT':
      let putList = state.products.map(product => {
        if(product._id === payload.id ){
          return  payload
        }else{
          return product
        }
      })
      return  {products:putList}
    
    case 'GET':
    return {products:payload}
    default:
    return state;
  }

  

}


export let filter = (category) =>({
  type:'FILTER_CATEGORY'
  ,payload:category
})

export let restore = () => ({
   type: 'SHOW_ALL',
})

export let increment = (product) =>({
  type:'INCREMENT',
  payload:product  
})

export let decrement = (payload) => ({
  type: 'DECREMENT',
  payload:payload
})


