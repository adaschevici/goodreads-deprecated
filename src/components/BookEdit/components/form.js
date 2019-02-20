import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export const Form = props => {
  const { onSubmit } = props
  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="author"
        name="author"
        label="Author"
        fullWidth
      />
      <TextField
        id="title"
        name="title"
        label="Title"
        fullWidth
      />
      <TextField
        id="starRating"
        name="starRating"
        label="Star Rating"
        fullWidth
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  )
}

