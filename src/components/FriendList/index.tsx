import React, { FC } from 'react'
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'

const friends = [
  {
    id: 1,
    name: 'vu',
  },
  {
    id: 2,
    name: 'tram',
  },
  {
    id: 3,
    name: 'vu2',
  },
  {
    id: 4,
    name: 'tram2',
  },
]

type Props = {}

const FriendList: FC<Props> = () => {
  return (
    <List>
      {friends.map((fr) => (
        <ListItem key={fr.id}>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText>{fr.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default FriendList
