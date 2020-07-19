import React, { FC } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import GoogleLoginBtn from './GoogleLoginBtn'
// import { API_BASE_URL } from '../../config'

const useStyles = makeStyles({
  root: {
    padding: '70px 0',
  },
})

const LoginScreen: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Link href="/sign-up">
        {/* <GoogleLoginBtn href={`${API_BASE_URL}/auth/google`} /> */}
        <GoogleLoginBtn />
      </Link>
    </div>
  )
}

export default LoginScreen
