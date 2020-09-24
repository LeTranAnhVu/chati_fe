// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const CHANGE_ROOM = 'CHANGE_ROOM'
export const APPEND_NEW_MESSAGE = 'APPEND_NEW_MESSAGE'

export type ChangeRoomAction = {
  type: typeof CHANGE_ROOM
  payload: RoomModel
}

export type AppendNewMessageAction = {
  type: typeof APPEND_NEW_MESSAGE
  payload: MessageInRoom
}

export type RoomActions = ChangeRoomAction | AppendNewMessageAction

export type UserInRoom = {
  id: string
  name: string
}
export type MessageInRoom = {
  id: string
  body: string
  roomId: string
  userId: string
  createdAt?: string
}

export type RoomModel = {
  id: string
  users: UserInRoom[]
  messages: MessageInRoom[]
}

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  room: RoomModel
}
