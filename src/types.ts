export const ACCESS_TOKEN = 'ACCESS_TOKEN'
export const DEFAULT_ROOM = '000'
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
  lastName?: string
  firstName: string
  avatar?: string
  email: string
}

export type UserForCommunication = {
  id: string
  firstName: string
  lastName: string
  avatar: string
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
  currentUser: CurrentUserState
}

//----------------------CURRENT_USER---------------------------

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOG_OUT = 'LOG_OUT'

export type LoginStatus = 'guest' | 'logging' | 'logged' | 'fail'

export type CurrentUser = {
  email?: string
  firstName?: string
  lastName?: string
  id?: string
  googleId?: string
  avatar?: string
}

export type CurrentUserState = CurrentUser & {
  loginStatus: LoginStatus
}

export type LoginRequestAction = {
  type: typeof LOGIN_REQUEST
}

export type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESS
  payload: CurrentUser
}

export type LoginFailAction = {
  type: typeof LOGIN_FAIL
}

export type LogoutAction = {
  type: typeof LOG_OUT
}

export type LoginActions =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction

export type CurrentUserActions = LoginActions
