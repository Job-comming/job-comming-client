import React, { FC } from 'react'
import { Button, ButtonProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: '0 5px 0 5px',
    fontSize: 18,
    backgroundColor: '#f7f7f7',
    color: 'rgba(0, 0, 0, 0.7)',
    '&:hover': {
      backgroundColor: '#e3e3e3',
    },
  },
})

const GoogleLoginBtn: FC<ButtonProps> = (props) => {
  const classes = useStyles()
  return (
    <Button
      {...props}
      className={classes.root}
      variant="text"
      startIcon={<img src="/static/icon/google.svg" alt="" />}
    >
      구글 아이디로 로그인
    </Button>
  )
}

export default GoogleLoginBtn
