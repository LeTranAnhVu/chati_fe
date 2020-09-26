import React, { FC } from 'react'
import Header from './components/Header'
import Sidebar from './components/SideBar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    content: {
      flexGrow: 1,
      display: 'flex',
    },
    main: {
      flexGrow: 1,
    },
  })
)

const MainLayout: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Sidebar />
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
