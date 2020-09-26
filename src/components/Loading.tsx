import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
)
type Props = {}

const Loading: FC<Props> = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <p>loading . . . </p>
    </div>
  )
}

export default Loading
