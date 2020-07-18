import React, { FC } from 'react'
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
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '21px',
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
      <p className={classes.guide}>내 멘토/멘티 신청내역을 알려드릴게요.</p>
    </div>
  )
}

export default NotificationList
