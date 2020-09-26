import React from 'react'
import { useDispatch } from 'react-redux'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'

import GoogleLoginButton from './GoogleLoginButton'
import { loginWithGoogleAction } from '../redux/actions/currentUser'

const useStyles = makeStyles({
  card: {
    width: '400px',
    height: '500px',
    padding: '30px',
    textAlign: 'center',
  },
})
export default function LoginForm() {
  const dispatch = useDispatch()
  const classes = useStyles()

  const responseGoogle = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const tokenId = (response as GoogleLoginResponse).tokenId
    if (tokenId) {
      dispatch(loginWithGoogleAction(tokenId))
    }
  }

  return (
    <Card className={classes.card}>
      <h1>Login:</h1>
      <GoogleLoginButton responseGoogle={responseGoogle} />
    </Card>
  )
}
