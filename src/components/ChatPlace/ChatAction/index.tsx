import React, { ChangeEvent, FC, useState } from 'react'
import { Button, createStyles, TextField, makeStyles } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'

import socket from '../../../services/socket'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '10px',
      display: 'flex',
    },
    textField: {
      // width: "70%",
      flexGrow: 1,
      marginRight: '10px',
    },
  })
)
type Props = {}

const chatroom = '12345'
const ChatAction: FC<Props> = () => {
  const [message, setMessage] = useState()

  const handleSubmit = async (e?: any) => {
    e && e.preventDefault()
    console.log('sent', message)
    if (message.trim()) {
      socket.emit('client-send-message', { room: chatroom, body: message })
    }
  }
  const classes = useStyles()
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        size="small"
        variant="outlined"
        className={classes.textField}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        endIcon={<Icon>send</Icon>}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </form>
  )
}

export default ChatAction
