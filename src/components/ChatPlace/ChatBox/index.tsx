import React, { FC } from 'react'
import ChatItem from './ChatItem'
import { createStyles, Paper } from '@material-ui/core'

import { RoomModel, UserInRoom } from '../../../types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: '0 10px',
      padding: '0 10px',
      height: '100px',
      overflow: 'scroll',
    },
  })
)

type Props = {
  room: RoomModel
}

const defaultUser = {
  name: 'unknown',
  id: '00000',
}

const ChatBox: FC<Props> = ({ room }) => {
  const classes = useStyles()

  const lookupUser = (userId: string): UserInRoom | undefined =>
    room.users.find((user) => user.id === userId)

  return (
    <Paper className={classes.root}>
      {room.messages.map((message) => (
        <ChatItem
          key={message.id}
          message={message}
          user={lookupUser(message.userId) || defaultUser}
        />
      ))}
    </Paper>
  )
}

export default ChatBox
