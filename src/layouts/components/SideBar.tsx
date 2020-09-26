import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Drawer, Divider, List, Toolbar } from '@material-ui/core'

import FriendList from '../../components/FriendList'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

const Sidebar = () => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <Divider />
        <List>
          <FriendList />
        </List>
        <Divider />
      </div>
    </Drawer>
  )
}

export default Sidebar
