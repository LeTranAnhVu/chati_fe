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
type Props = {
  roomId: string
}

const ChatAction: FC<Props> = ({ roomId }) => {
  const classes = useStyles()
  const [message, setMessage] = useState('')
  const handleSubmit = async (e?: any) => {
    e && e.preventDefault()
    if (message.trim()) {
      socket.emit(
        'client-send-message',
        { roomId: roomId, body: message },
        () => {
          console.log('sent')
          setMessage('')
        }
      )
    }
  }
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
        value={message}
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
