import { FETCH_BOOKS_STARTED, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILED } from '../actions/types'

export default(state = {}, action) => {
  switch (action.type) {
  case FETCH_BOOKS_STARTED:
    return {
      loading: true
    }
  case FETCH_BOOKS_SUCCESS:
    return {
      books: action.payload.books,
      loading: false
    }
  case FETCH_BOOKS_FAILED:
    return {
      error: action.payload.error,
      loading: false
    }
  default:
    return state
  }
}
