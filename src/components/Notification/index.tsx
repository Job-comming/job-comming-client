import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NotificationList from './NotificationList'

const useStyles = makeStyles({
  root: {},

  title: {
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    opacity: '0.5',
    paddingBottom: '10px',

    '&:after': {
      content: "''",
      width: 15,
      height: 17,
      marginLeft: '5px',
      background: 'url(/static/icon/bell.svg) no-repeat',
    },
  },
})

const Notification: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" component="h4">
        알림!
      </Typography>
      <NotificationList notifications={[]} />
    </div>
  )
}

export default Notification
