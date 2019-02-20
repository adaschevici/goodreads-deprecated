import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import styles from './styles'


const Book = props => {
  const {
    book_id: bookId,
    classes,
    isbn,
    isbn13,
    authors,
    original_title: originalTitle,
    original_publication_year: originalPublicationYear,
    average_rating: avgRating,
    language_code: langCode,
    small_image_url: smallImgUrl
  } = props
  return  (
    <TableRow
      hover
      tabIndex={-1}
      key={bookId}
    >
      <TableCell>
        <Link to={{ pathname: '/edit-book', state: { bookId }}}>
          <Fab color="secondary" aria-label="Edit" className={classes.fab}>
            <Icon>edit_icon</Icon>
          </Fab>
        </Link>
      </TableCell>
      <TableCell>
        <Fab aria-label="Delete" className={classes.fab}>
          <DeleteIcon />
        </Fab>
      </TableCell>
      <TableCell className={classes.tableCell}>{isbn}</TableCell>
      <TableCell className={classes.tableCell}>{Number(isbn13)}</TableCell>
      <TableCell className={classes.tableCell}>{authors}</TableCell>
      <TableCell className={classes.tableCell}>{originalTitle}</TableCell>
      <TableCell className={classes.tableCell}>{Number(originalPublicationYear)}</TableCell>
      <TableCell className={classes.tableCell}>{avgRating}</TableCell>
      <TableCell className={classes.tableCell}>{langCode}</TableCell>
      <TableCell>
        <img src={smallImgUrl} alt={originalTitle} />
      </TableCell>
    </TableRow>
  )
}

Book.propTypes = {
  book_id: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
  isbn13: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  original_publication_year: PropTypes.string.isRequired,
  average_rating: PropTypes.string.isRequired,
  language_code: PropTypes.string.isRequired,
  small_image_url: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired
}

export default withStyles(styles)(Book)

