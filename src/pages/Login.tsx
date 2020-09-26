import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import LoginForm from '../components/LoginForm'

const useStyles = makeStyles({
  root: {
    width: '100vh',
    height: '100vh',
    marginTop: '10%',
    display: 'flex',
    justifyContent: 'center',
  },
})

export default function Login() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <LoginForm />
    </Box>
  )
}
