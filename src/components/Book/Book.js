import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import styles from './styles'


const Book = props => (
  <TableRow
    hover
    tabIndex={-1}
    key={props.book_id}
  >
    <TableCell className={props.classes.tableCell}>{props.isbn}</TableCell>
    <TableCell className={props.classes.tableCell}>{Number(props.isbn13)}</TableCell>
    <TableCell className={props.classes.tableCell}>{props.authors}</TableCell>
    <TableCell className={props.classes.tableCell}>{props.original_title}</TableCell>
    <TableCell className={props.classes.tableCell}>{Number(props.original_publication_year)}</TableCell>
    <TableCell className={props.classes.tableCell}>{props.average_rating}</TableCell>
    <TableCell className={props.classes.tableCell}>{props.language_code}</TableCell>
    <TableCell>
      <img src={props.small_image_url} alt={props.original_title} />
    </TableCell>
  </TableRow>
)

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
  classes: PropTypes.object
}

export default withStyles(styles)(Book)

