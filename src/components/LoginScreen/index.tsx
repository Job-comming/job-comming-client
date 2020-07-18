import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GoogleLoginBtn from './GoogleLoginBtn'
import { API_BASE_URL } from '../../config'

const useStyles = makeStyles({
  root: {
    padding: '80px 0',
  },
})

const LoginScreen: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <GoogleLoginBtn href={`${API_BASE_URL}/auth/google`} />
    </div>
  )
}

export default LoginScreen
