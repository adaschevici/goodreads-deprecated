import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_STARTED,
  FETCH_BOOKS_FAILED
} from './types'

export const fetchBooksSuccessAction = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: {
    books
  }
})

export const fetchBooksFailed = error => ({
  type: FETCH_BOOKS_FAILED,
  payload: {
    error
  }
})

export const fetchBooksAction = url => dispatch => {
  dispatch({
    type: FETCH_BOOKS_STARTED
  })
  fetch(url)
    .then(res => res.json())
    .then(books => {
      dispatch(fetchBooksSuccessAction(books))
    })
    .catch(error => dispatch(fetchBooksFailed(error.message)))
}

