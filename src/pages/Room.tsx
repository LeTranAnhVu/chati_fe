import React, { FC, useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core'
import FriendList from '../components/FriendList'
import ChatPlace from '../components/ChatPlace'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { joinRoom } from '../services/socket'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
    },
    cols: {
      height: '100%',
    },
  })
)

type Props = {}

export const roomName = '12345'

const Room: FC<Props> = () => {
  const classes = useStyles()
  useEffect(() => {
    joinRoom(roomName)
  }, [])

  return (
    <Grid container className={classes.root}>
      <Grid item xs={3}>
        <Paper className={classes.cols}>
          <FriendList />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <div className={classes.cols}>
          <ChatPlace />
        </div>
      </Grid>
    </Grid>
  )
}

export default Room
