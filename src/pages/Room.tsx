import React, { FC, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { appendNewMessage, fetchRoom } from '../redux/actions/room'
import { joinRoom, socketFactory } from '../services/socket'
import { loadCurrentUserInfoAsync } from '../redux/actions/currentUser'
import Loading from '../components/Loading'
import { AppState } from '../types'
import ChatBox from '../components/ChatBox'
import ChatAction from '../components/ChatAction'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  })
)

type Props = {}

const Room: FC<Props> = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { id: roomId } = useParams()
  const { room } = useSelector<AppState, AppState>((state) => state)

  // load the user from server at the beginning
  // then save it to store
  useEffect(() => {
    dispatch(loadCurrentUserInfoAsync())
  }, [dispatch])

  useEffect(() => {
    // fetch room
    dispatch(fetchRoom(roomId))
  }, [dispatch, roomId])

  useEffect(() => {
    const socket = socketFactory.getSocket(true)
    socket &&
      socket.on('server-send-message', (data: any) => {
        dispatch(appendNewMessage(data))
      })
  }, [dispatch])

  useEffect(() => {
    if (room && room.id) {
      joinRoom(room.id)
    }
  }, [room])

  if (!room || !room.id) {
    return <Loading />
  }

  return (
    <div className={classes.root}>
      <ChatBox room={room} />
      <ChatAction roomId={room.id} />
    </div>
  )
}

export default Room
