import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minHeight: '470px',
    backgroundColor: 'rgba(206, 212, 218, 0.05)',
    border: '1px solid #CED4DA',
    borderRadius: '4px',
    padding: '12px 16px',
  },

  guide: {
    color: '#000000',
    opacity: '0.5',
  },
})

interface NotificationListProps {
  notifications: []
}

const NotificationList: FC<NotificationListProps> = ({ notifications }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.guide} variant="h4" component="p">
        내 멘토/멘티 신청내역을 알려드릴게요.
      </Typography>
    </div>
  )
}

export default NotificationList
