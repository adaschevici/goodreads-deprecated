import React, { Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Formik } from 'formik'
import Paper from '@material-ui/core/Paper'
import { withRouter } from 'react-router'
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

const BookEdit = props => {
  const { classes, bookId } = props
  return (
    <Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
          <h1>Book Editing Form</h1>
          <Formik
            render={() => <Form {...props} />}
          />
        </Paper>
      </div>
    </Fragment>
  )
}

export default withRouter(withStyles(styles)(BookEdit))
