import React, { useEffect } from 'react'
import ChatBox from './ChatBox'
import ChatAction from './ChatAction'
import { createStyles, makeStyles } from '@material-ui/core'
import { AppState, RoomModel } from '../../types'
import { joinRoom } from '../../services/socket'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    action: {
      // flexBasis: "50px"
    },
  })
)

const ChatPlace = () => {
  const room = useSelector<AppState, RoomModel>((state) => state.room)
  const classes = useStyles()

  useEffect(() => {
    if (room && room.id) {
      joinRoom(room.id)
    }
  }, [room])

  if (!room || !room.id) {
    return <div>Invalid room</div>
  }

  return (
    <div className={classes.root}>
      <ChatBox room={room} />
      <ChatAction roomId={room.id} />
    </div>
  )
}
export default ChatPlace
