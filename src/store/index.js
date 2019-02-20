import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const composeEnhancers = composeWithDevTools({
  trace: true
})

const createLogger = ({ getState }) =>
  (next) =>
    (action) => {
      const { console } = window
      const prevState = getState()
      const returnValue = next(action)
      const nextState = getState()
      const actionType = String(action.type)
      const message = `action ${actionType}`
      console.log('%c prev state', 'color: #9E9E9E', prevState)
      console.log('%c action', 'color: #03A9F4', message)
      console.log('%c next state', 'color: #4CAF50', nextState)
      return returnValue
    }

const middlewares = [thunk, createLogger]

export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}
