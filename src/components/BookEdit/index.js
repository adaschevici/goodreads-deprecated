import React, { Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Formik } from 'formik'
import Paper from '@material-ui/core/Paper'
import { withRouter } from 'react-router'
import * as Yup from 'yup'
import { Form } from './components/form'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    margin: 'auto 0 ',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  },
  container: {
    minWidth: '30rem',
    width: '40vw',
    paddingLeft: '15vw'
  }
})

const validationSchema = Yup.object({
  originalTitle: Yup.string('Enter the title')
    .required('A title is required'),
  authors: Yup.string('Enter authors')
    .required('Authors are required'),
  avgRating: Yup.number('Enter average rating')
    .test('test-valid-rating', 'Must be greater than 1', rating => rating>1)
})

const BookEdit = props => {
  const { classes } = props
  const { location } = props
  const values = location.state ? { ...location.state.book } : {}
  return (
    <Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
          <h1>Book Editing Form</h1>
          <Formik
            initialValues={values}
            render={fields => <Form {...fields} />}
            validationSchema={validationSchema}
          />
        </Paper>
      </div>
    </Fragment>
  )
}

export default withRouter(withStyles(styles)(BookEdit))
