import { createStore } from 'redux'

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  console.log('reducer running', action)

  switch(action.type) {
    case 'INCREMENT': 
      return {...state, count: state.count + action.number}
    default:
      return state;
  }
}

const store = createStore(reducer)

export default store