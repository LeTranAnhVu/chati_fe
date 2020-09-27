import { Dispatch } from 'redux'

import {
  CurrentUser,
  LoginFailAction,
  LoginRequestAction,
  LoginSuccessAction,
  LogoutAction,
  LOG_OUT,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  DEFAULT_ROOM,
} from '../../types'
import localstorageUtils from '../../utils/localstorageUtils'
import authService from '../../services/auth'
import history from '../../utils/history'

export const loginRequestAction = (): LoginRequestAction => ({
  type: LOGIN_REQUEST,
})

export const loginSuccessAction = (user: CurrentUser): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loadCurrentUserInfo = (user: CurrentUser): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFailAction = (): LoginFailAction => ({ type: LOGIN_FAIL })

export const loadCurrentUserInfoAsync = () => async (dispatch: Dispatch) => {
  try {
    const user = await authService.getUserInfo()
    if (user) {
      dispatch(loadCurrentUserInfo(user as CurrentUser))
    }
  } catch (e) {
    dispatch(loginFailAction())
  }
}

export const loginWithGoogleAction = (tokenId: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(loginRequestAction())
    const user = await authService.authByGoogle(tokenId)
    dispatch(loginSuccessAction(user as CurrentUser))
    history.push(`/rooms/${DEFAULT_ROOM}`)
  } catch (e) {
    dispatch(loginFailAction())
  }
}

export const logoutAction = (): LogoutAction => {
  localstorageUtils.clearAll()
  history.push('/login')
  return { type: LOG_OUT }
}
