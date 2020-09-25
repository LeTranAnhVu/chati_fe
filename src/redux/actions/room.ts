import {
  APPEND_NEW_MESSAGE,
  AppendNewMessageAction,
  CHANGE_ROOM,
  MessageInRoom,
} from '../../types'
import { Dispatch } from 'redux'

import roomService from '../../services/room'

export const appendNewMessage = (
  newMessage: MessageInRoom
): AppendNewMessageAction => {
  return {
    type: APPEND_NEW_MESSAGE,
    payload: newMessage,
  }
}

export const fetchRoom = (roomId: string) => async (dispatch: Dispatch) => {
  try {
    const room = await roomService.fetchOne(roomId)
    dispatch({
      type: CHANGE_ROOM,
      payload: room,
    })
  } catch (e) {
    return null
  }
}
