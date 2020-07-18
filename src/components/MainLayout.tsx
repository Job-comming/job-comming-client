import React, { FC } from 'react'
import { Theme, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Menu from './Menu'
import Notification from './Notification'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    width: '1080px',
    margin: '0 auto',
  },

  header: {
    paddingTop: '30px',
    textAlign: 'center',

    '& img': {
      verticalAlign: 'bottom',
    },
  },

  main: {
    padding: '58px 52px',
    backgroundColor: '#FFFFFF',
  },

  menu: {
    marginBottom: '74px',
  },
}))

const MainLayout: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src="/static/logo/logo-small.svg" />
      </div>
      <Grid container className={classes.main}>
        <Grid item>
          <div className={classes.menu}>
            <Menu />
          </div>
          <Notification />
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </div>
  )
}

export default MainLayout
