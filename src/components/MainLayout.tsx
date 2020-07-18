import React, { FC } from 'react'
import { Theme } from '@material-ui/core'
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
    display: 'flex',
    justifyContent: 'space-between',
  },

  menu: {
    marginBottom: '74px',
  },

  content: {
    flex: '1 1',
    marginLeft: '48px',
  },
}))

const MainLayout: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src="/static/logo/logo-small.svg" />
      </div>
      <div className={classes.main}>
        <div>
          <div className={classes.menu}>
            <Menu />
          </div>
          <Notification />
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
