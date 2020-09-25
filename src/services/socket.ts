import io from 'socket.io-client'
import { SOCKET_URL } from './index'

const socket = io(SOCKET_URL)

socket.on('connect', () => {
  console.log('connected to socket')
})

export const joinRoom = (roomName: string) => {
  socket.emit('join-room', { room: roomName })
}

export default socket
