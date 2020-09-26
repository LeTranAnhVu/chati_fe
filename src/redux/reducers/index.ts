import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import room from './room'
import currentUser from './currentUser'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    room,
    currentUser,
  })

export default createRootReducer
