import React from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import { GOOGLE_CLIENT_ID } from '../utils/secret'

type Props = {
  responseGoogle: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => Promise<any>
}
export default function GoogleLoginButton({ responseGoogle }: Props) {
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID || ''}
      buttonText={'Login with Google'}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  )
}
