const redux = require('redux')

const initialState = {
  name: 'Roger',
  address: {
    street: '1206 Rodrigues da Silva St',
    city: 'Douradina',
    state: 'MS'
  }
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street
  }
}

const reducer =(state=initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload
        }
      }
    default:
      return state
  }
}

const store = redux.createStore(reducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState());
})
store.dispatch(updateStreet('1207 Rodrigues da Silva St'))
unsubscribe()