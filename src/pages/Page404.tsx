import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import history from '../utils/history'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
    },
    content: {
      paddingTop: 150,
      textAlign: 'center',
    },
    image: {
      marginTop: 50,
      display: 'inline-block',
      maxWidth: '100%',
      width: 560,
    },
  })
)

const Page404 = () => {
  const classes = useStyles()
  const socials = [
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/letrananhvu',
    },
    {
      title: 'Github',
      url: 'https://github.com/LeTranAnhVu',
    },
    {
      title: 'Portfolio',
      url: 'https://letrananhvu.github.io',
    },
    {
      title: 'Email',
      content: 'vule5726gmail.com',
    },
  ]

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <div className={classes.content}>
            <div>
              <Button
                variant={'contained'}
                color={'secondary'}
                onClick={() => {
                  history.push('/rooms')
                }}
              >
                Back to room
              </Button>
            </div>
            <img
              alt="Under development"
              className={classes.image}
              src="/images/undraw_page_not_found_su7k.svg"
            />
            <h1>This application developed by Brian Le (Vu Le)</h1>
            {socials.map((resource) => (
              <p key={resource.title}>
                {resource.title}:{' '}
                <a href={resource.url}>{resource.url || resource.content}</a>
              </p>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Page404
