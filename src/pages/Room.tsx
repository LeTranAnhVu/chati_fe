import React, { FC, useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core'
import FriendList from '../components/FriendList'
import ChatPlace from '../components/ChatPlace'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { appendNewMessage, fetchRoom } from '../redux/actions/room'
import socket from '../services/socket'

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

const Room: FC<Props> = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { id: roomId } = useParams()

  useEffect(() => {
    // fetch room
    dispatch(fetchRoom(roomId))
  }, [dispatch, roomId])

  socket.on('server-send-message', (data: any) => {
    dispatch(appendNewMessage(data))
  })

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
