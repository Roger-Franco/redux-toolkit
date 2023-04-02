// console.log('from index.js')
const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake() {
  return {
    type: CAKE_ORDERED,
    // quantity: 1
    payload: 1
  }
} 

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    // quantity: qty
    payload: qty
  }
} 

const initialState = {
  numOfCakes: 10
}
// (previousState, action) => newState

const reducer = (state= initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes -1
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      }
      
    default:
      return state
  }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('Update state ', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake())
store.dispatch(restockCake())
store.dispatch(restockCake(2))

// console.log('Initial state2', store.getState())
unsubscribe()
