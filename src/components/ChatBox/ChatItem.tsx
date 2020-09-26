import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import * as moment from 'moment'
import { Avatar } from '@material-ui/core'

import { MessageInRoom, UserInRoom } from '../../types'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      margin: '20px 0',
    },
    avatar: {
      marginRight: '10px',
    },
    content: {},
    meta: {
      margin: '0 0 10px 0',
    },
    userName: {
      fontWeight: 'bold',
      marginRight: '5px',
    },
    date: {
      fontStyle: 'italic',
      fontSize: '0.8em',
    },
    body: {
      margin: '0 0 5px 0',
      fontSize: '0.9em',
    },
  })
)

type Props = {
  message: MessageInRoom
  user: UserInRoom
}

const ChatItem: FC<Props> = ({ user, message }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} variant="square" src="#">
        {user.name.slice(0, 1).toUpperCase()}
      </Avatar>
      <div className={classes.content}>
        <p className={classes.meta}>
          <span className={classes.userName}>{user.name}</span>
          <span className={classes.date}>
            {moment.default(message.createdAt).fromNow()}
          </span>
        </p>
        <p className={classes.body}>{message.body}</p>
      </div>
    </div>
  )
}

export default ChatItem
