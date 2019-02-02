import { lighten } from '@material-ui/core/styles/colorManipulator'

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  tableCell: {
    textAlign: 'center',
    paddingLeft: '3%',
  },
})

export default toolbarStyles

