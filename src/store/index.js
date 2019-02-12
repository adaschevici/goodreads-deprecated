import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const composeEnhancers = composeWithDevTools({
  trace: true
})

const customMiddleWare = store => next => action => {
  console.log('Middleware triggered:', action)
  console.log(store.getState())
  next(action)
}

const middlewares = [thunk, customMiddleWare]

export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}
