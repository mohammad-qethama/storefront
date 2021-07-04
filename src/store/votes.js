/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const initialState = {
  candidates:[{name:'croco',votes:0},{name:'saeed',votes:0},{name:'wahtever',votes:0}],
  totalVotes:0

}

export default (state=initialState,action) => {
  let {type,payload} = action;
  switch (type) {
    case 'INCREMENT':
      let people = state.candidates.map(candidate=>{
        if (candidate.name === payload){
          return {name:candidate.name,votes:candidate.votes+1}
        }
        return candidate;
      })
      let newTotal = state.totalVotes+1;
      return {candidates:people,totalVotes:newTotal}
    case 'RESET':
      return initialState
    default:
      return state;
      
  }  
}

export const increment = (name)=>{

  return {
    type:'INCREMENT',
    payload:name
  }

}

export const reset = ()=>{
  return {
    type:'RESET',
  }
}