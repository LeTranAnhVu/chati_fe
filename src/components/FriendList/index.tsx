import React, { FC, useEffect, useState } from 'react'
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  createStyles,
  ListSubheader,
} from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh'

import userService from '../../services/user'
import roomService from '../../services/room'
import Loading from '../Loading'
import { makeStyles } from '@material-ui/core/styles'
import history from '../../utils/history'
import { AppState, CurrentUser, UserForCommunication } from '../../types'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(() =>
  createStyles({
    head: {
      display: 'flex',
      justifyContent: 'space-between',
      '& h2': {
        margin: 0,
      },
    },
    refreshButton: {
      // margin: "auto"
    },
  })
)

type Props = {}

const FriendList: FC<Props> = () => {
  const [users, setUsers] = useState<UserForCommunication[]>([])
  const currentUser = useSelector<AppState, CurrentUser>(
    (state) => state.currentUser
  )
  const classes = useStyles()
  const fetchUsers = async () => {
    try {
      const users = await userService.fetchAll()
      setUsers(users)
    } catch (e) {
      console.log('cannot fetch users')
    }
  }

  const handleFetchRoomByUser = async (user: UserForCommunication) => {
    try {
      const room = await roomService.fetchOrCreateByUserId(user.id)
      console.log('------->', room)
      history.push(`/rooms/${room.id}`)
    } catch (e) {
      console.log('cannot get room')
    }
  }
  const handleRefresh = () => {
    fetchUsers()
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (users.length === 0) {
    return <Loading />
  }

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader className={classes.head} component="div">
          <h2>Friends</h2>
          <Button
            size="small"
            className={classes.refreshButton}
            onClick={handleRefresh}
          >
            <RefreshIcon />
          </Button>
        </ListSubheader>
      }
    >
      {users
        .filter((user) => user.id !== currentUser.id)
        .map((user) => (
          <ListItem
            button
            onClick={() => handleFetchRoomByUser(user)}
            key={user.id}
          >
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText>
              {user.firstName + ' ' + user.lastName}
              {/*{currentUser && currentUser.id === user.id && <span> (me)</span>}*/}
            </ListItemText>
          </ListItem>
        ))}
    </List>
  )
}

export default FriendList
