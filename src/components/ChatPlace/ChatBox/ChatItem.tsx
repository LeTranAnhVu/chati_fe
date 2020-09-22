import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import { MessageItem } from '../../../types'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      margin: '20px 0',
      '& p': {
        maxWidth: '48%',
      },
    },
    isOwn: {
      justifyContent: 'flex-end',
      '& p': {
        // textAlign: "right"
      },
    },
  })
)

type Props = {
  item: MessageItem
}

const ChatItem: FC<Props> = ({ item }) => {
  const classes = useStyles()
  const rootClass = classNames({
    [classes.root]: true,
    [classes.isOwn]: Boolean(Math.round(Math.random())),
  })
  return (
    <div className={rootClass}>
      <p>{item.body}</p>
    </div>
  )
}

export default ChatItem
