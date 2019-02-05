import { FETCH_BOOKS_SUCCESS } from '../actions/types'

export default(state = {}, action) => {
  switch (action.type) {
  case FETCH_BOOKS_SUCCESS:
    return {
      books: action.payload.books
    }
  default:
    return state
  }
}
