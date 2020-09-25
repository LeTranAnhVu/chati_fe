import {
  RoomActions,
  RoomModel,
  CHANGE_ROOM,
  APPEND_NEW_MESSAGE,
} from '../../types'

const initialValue = {
  id: '',
  users: [],
  messages: [],
}

export default function room(
  state: RoomModel = initialValue,
  action: RoomActions
): RoomModel {
  switch (action.type) {
  case APPEND_NEW_MESSAGE: {
    return { ...state, messages: [...state.messages, action.payload] }
  }
  case CHANGE_ROOM: {
    return action.payload
  }
  }
  return state
}
