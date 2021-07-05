let initialState = {
  products:[
    {
      category: 'Ele',
      name:'PC',
      description:'PCMR is endangered species in this age of time, join the MR NOW!',
      price: 9999,
      inventoryCount:3,
      img:'https://cdn1.dotesports.com/wp-content/uploads/2020/08/03153600/pc-cover.jpg'

    },{
      category: 'food',
      name:'buffer fish',
      description:'want to die? , would you like to try ? ',
      price: 500,
      inventoryCount:1,
      img:'https://www.oyakata.com.pl/media/artykuly/sashimi-z-ryby-fugu.jpg'


    },{
      category: 'Ele',
      name:'Phone',
      description:'alot of technologies in a small package (don\'t call the 5ghz ,5G please!)',
      price: 800,
      inventoryCount:50,
      img:'https://mobilelink.com.bd/storage/media/EH3Ra2gYw2IhMGKmxSUFKqXfGHHu29v393JPiq41.jpeg'


    },{
      category: 'food',
      name:'tomahawk stake ',
      description:'very large stake ',
      price: 40,
      inventoryCount:62,
      img:'https://www.yoranchsteakhouse.com/wp-content/uploads/2017/12/tomahawk-steak.jpg'

    },{
      category: 'Ele',
      name:'laptop',
      description:'you hate your old laptop ,get this and hate it instead !!',
      price: 1200,
      inventoryCount:6,
      img:'https://images-na.ssl-images-amazon.com/images/I/61KIGfrC82L._SL1404_.jpg'

    }




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
      

    case 'DECREMENT':
      let updatedListDec = state.products.map(product=>{
        return ((product.name === payload.name) )?  Object.assign({},product,{inventoryCount: product.inventoryCount-1}) : product; 
      })
      return {products: updatedListDec};

  
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


