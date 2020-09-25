import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import room from './room'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    room,
  })

export default createRootReducer
