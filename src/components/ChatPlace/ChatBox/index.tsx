import React, { FC } from 'react'
import ChatItem from './ChatItem'
import { createStyles, Paper } from '@material-ui/core'

import faker from 'faker'
import { MessageItem } from '../../../types'
import { makeStyles } from '@material-ui/core/styles'
import socket from '../../../services/socket'

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

type Props = {}

let conversations: MessageItem[] = []

for (let i = 1; i <= 30; i++) {
  conversations.push({
    id: faker.random.uuid(),
    body: faker.lorem.sentence(),
  })
}

const ChatBox: FC<Props> = () => {
  const classes = useStyles()
  socket.on('server-send-message', (data: any) => {
    console.log('<<<<', data)
  })
  return (
    <Paper className={classes.root}>
      {conversations.map((conv) => (
        <ChatItem key={conv.id} item={conv} />
      ))}
    </Paper>
  )
}

export default ChatBox
