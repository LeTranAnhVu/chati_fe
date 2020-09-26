import io from 'socket.io-client'
import { SOCKET_URL } from './index'
import localstorageUtils from '../utils/localstorageUtils'
import { ACCESS_TOKEN } from '../types'

export const joinRoom = (roomName: string) => {
  let socket = socketFactory.getSocket()
  socket.emit('join-room', { room: roomName })
}

export const socketFactory = (function singleton() {
  let socketInstance: any

  function createInstance() {
    const token = localstorageUtils.getItem(ACCESS_TOKEN)
    // create new socket
    return io(`${SOCKET_URL}?token=${token}`)
  }

  return {
    getSocket: (forceReset: boolean = false) => {
      if (!socketInstance || forceReset) {
        socketInstance = createInstance()
        socketInstance.on('connect', () => {
          console.log('connected to socket')
        })
      }
      return socketInstance
    },
  }
})()

export default socketFactory
