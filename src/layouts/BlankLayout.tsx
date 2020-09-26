import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Header from './components/Header'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

const BlankLayout: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>{children}</main>
    </div>
  )
}

export default BlankLayout
