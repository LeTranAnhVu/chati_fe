import {
  CurrentUserActions,
  CurrentUserState,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from '../../types'

const initialState: CurrentUserState = {
  loginStatus: 'guest',
}

export default function currentUserReducer(
  state: CurrentUserState = initialState,
  action: CurrentUserActions
): CurrentUserState {
  switch (action.type) {
  case LOGIN_REQUEST: {
    return { loginStatus: 'logging' }
  }
  case LOGIN_SUCCESS: {
    const userInfo = action.payload
    return { ...userInfo, loginStatus: 'logged' }
  }
  case LOGIN_FAIL: {
    return { loginStatus: 'fail' }
  }
  case LOG_OUT: {
    return { loginStatus: 'guest' }
  }
  }
  return state
}
