import React from 'react'
import ChatBox from './ChatBox'
import ChatAction from './ChatAction'
import { createStyles, makeStyles } from '@material-ui/core'
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
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ChatBox />
      <ChatAction />
    </div>
  )
}
export default ChatPlace
