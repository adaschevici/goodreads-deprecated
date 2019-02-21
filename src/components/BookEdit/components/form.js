import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export const Form = props => {
  const { onSubmit, values: { authors, originalTitle, avgRating }, errors, touched, handleChange, isValid, setFieldTouched } = props
  const change = (name, e) => {
    e.persist()
    handleChange(e)
    setFieldTouched(name, true, false)
  }
  return (
    <form onSubmit={() => alert('Submitted 🦄')}>
      <TextField
        id="authors"
        name="authors"
        label="Author"
        value={authors}
        helperText={touched.authors ? errors.authors : ''}
        error={touched.authors && Boolean(errors.authors)}
        onChange={change.bind(null, 'authors')}
        fullWidth
      />
      <TextField
        id="originalTitle"
        name="originalTitle"
        label="Title"
        value={originalTitle}
        helperText={touched.originalTitle ? errors.originalTitle : ''}
        error={touched.originalTitle && Boolean(errors.originalTitle)}
        onChange={change.bind(null, 'originalTitle')}
        fullWidth
      />
      <TextField
        id="avgRating"
        name="avgRating"
        label="Star Rating"
        value={avgRating}
        helperText={touched.avgRating ? errors.avgRating : ''}
        error={touched.avgRating && Boolean(errors.avgRating)}
        onChange={change.bind(null, 'avgRating')}
        fullWidth
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  )
}

Form.defaultProps = {
  values: {
    originalTitle: '',
    avgRating: '',
    authors: ''
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({}),
  errors: PropTypes.shape({}).isRequired,
  touched: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired
}
