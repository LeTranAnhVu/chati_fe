import React, { FC, useEffect, useRef, useState } from 'react'
import ChatItem from './ChatItem'
import { createStyles, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AutoScroll from '@brianmcallister/react-auto-scroll'

import { RoomModel, UserInRoom } from '../../../types'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: '0 10px',
      padding: '0 10px',
      height: '100px',
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
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [rootHeight, setRootHeight] = useState(0)
  const lookupUser = (userId: string): UserInRoom | undefined =>
    room.users.find((user) => user.id === userId)

  useEffect(() => {
    if (rootRef.current) {
      setRootHeight(rootRef.current.clientHeight)
    }
  }, [rootRef?.current?.clientHeight])

  return (
    <Paper ref={rootRef} className={classes.root}>
      <AutoScroll
        scrollBehavior="smooth"
        height={rootHeight}
        showOption={true}
        preventInteraction={true}
      >
        {room.messages.map((message) => (
          <ChatItem
            key={message.id}
            message={message}
            user={lookupUser(message.userId) || defaultUser}
          />
        ))}
      </AutoScroll>
    </Paper>
  )
}

export default ChatBox
