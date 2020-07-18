import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NotificationList from './NotificationList'

const useStyles = makeStyles({
  root: {},

  title: {
    display: 'flex',
    alignItems: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#000000',
    opacity: '0.5',
    marginBottom: '12px',

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
      <p className={classes.title}>알림!</p>
      <NotificationList notifications={[]} />
    </div>
  )
}

export default Notification
