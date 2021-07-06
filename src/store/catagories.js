

const initialState = {
  categories:[{name:'electronics',displayName:'Electronics',description:'most modern reliable electronics'}
  ,{name:'food',displayName:'Food',description:'Delicious Food with a lot of nutrition\'s'}],
  activeCategory:'all'
};

const category = (state=initialState,action)=>{
 let {payload,type} = action
 switch (type) {
   case 'CHANGE_CATEGORY':
    let newActive = payload;
    // console.log(newActive);
    return {categories:state.categories,activeCategory:newActive} ;
    default:
    return state;
 }

}

export default category;

export const activeCategory = (payload) =>({
  type:'CHANGE_CATEGORY',
  payload:payload
});