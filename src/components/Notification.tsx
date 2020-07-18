import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {},
})

const Notification: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <p>
        알림
        <img src="/static/icon/bell.svg" />
      </p>
    </div>
  )
}

export default Notification
