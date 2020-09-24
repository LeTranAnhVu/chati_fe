import {
  APPEND_NEW_MESSAGE,
  AppendNewMessageAction,
  CHANGE_ROOM,
  ChangeRoomAction,
  MessageInRoom,
  RoomModel,
} from '../../types'
import faker from 'faker'

export const appendNewMessage = (
  newMessage: MessageInRoom
): AppendNewMessageAction => {
  return {
    type: APPEND_NEW_MESSAGE,
    payload: newMessage,
  }
}

export const fetchRoom = (roomId: string): ChangeRoomAction => {
  const room: RoomModel = {
    id: '12345',
    users: [
      {
        id: '1',
        name: 'brian',
      },
      {
        id: '2',
        name: 'tram',
      },
    ],
    messages: [],
  }
  for (let i = 1; i <= 3; i++) {
    room.messages.push({
      id: faker.random.uuid(),
      body: faker.lorem.sentence(),
      roomId: '1',
      userId: Math.round(Math.random()) ? '1' : '2',
    })
  }

  return {
    type: CHANGE_ROOM,
    payload: room,
  }
}
