import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS
} from './types'

export const fetchBooksSuccessAction = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: {
    books
  }
})

export const fetchBooksAction = url => dispatch => {
  dispatch({
    type: FETCH_BOOKS,
    payload: 'starting_book_fetch'
  })
  fetch(url)
    .then(res => res.json())
    .then(books => {
      dispatch(fetchBooksSuccessAction(books))
    })
}

