import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background:
      'linear-gradient(180deg, rgba(53, 61, 57, 0) 70.15%, rgba(136, 255, 206, 0.2) 100%), #35383D',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px',
  },
  subtitle: {
    fontSize: '1.5rem',
    lineHeight: '48px',
    fontWeight: 300,
    color: '#FFFFFF',
    paddingBottom: '24px',

    '& span': {
      fontWeight: 'bold',
    },
  },
  title: {
    fontSize: '3rem',
    lineHeight: '48px',
    fontWeight: 900,
    color: '#88FFCE',
    paddingTop: '28px',
  },
})

const LoginScreen: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <p className={classes.subtitle}>
        손을 <span>잡</span>으면 <span>JOB</span>이와요
      </p>
      <img src="/static/logo/logo.svg" />
      <p className={classes.title}>(잡커밍!)</p>
    </div>
  )
}

export default LoginScreen
