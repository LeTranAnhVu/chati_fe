import React, { useEffect } from 'react'

import Routes from './Routes'
import socket from './services/socket'

export default function App() {
  const emit = async () => {
    socket.send('hahaha')
  }
  useEffect(() => {}, [])

  return (
    <>
      <button onClick={emit}>send</button>
      <Routes />
    </>
  )
}
