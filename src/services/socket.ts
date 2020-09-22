import io from 'socket.io-client'

const socket = io('http://localhost:5000/chat?token=brianle')

socket.on('connect', () => {
  console.log('connected to socket')
})

export const joinRoom = (roomName: string) => {
  socket.emit('join-room', { room: roomName })
}

export default socket
