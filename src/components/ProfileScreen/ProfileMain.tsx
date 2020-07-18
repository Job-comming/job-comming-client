import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { EllipseCheckbox } from 'components/common/checkbox'

const useStyles = makeStyles({
  root: {},
  aboutMe: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '29px',
    color: '#000000',
    marginRight: '16px',
  },
  button: {
    textTransform: 'none',
  },
})

const ProfileMain: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.aboutMe}>
        <div>
          <span className={classes.name}>나는 박혜원</span>
          <EllipseCheckbox name="주니어" disabled />
          <EllipseCheckbox name="# fullstack" disabled />
          <EllipseCheckbox name="# fullstack" disabled />
          <EllipseCheckbox name="# fullstack" disabled />
          <Button className={classes.button} color="secondary">
            edit
          </Button>
        </div>
        <Button className={classes.button} color="primary">
          Logout
        </Button>
      </div>
      profile feed list
    </div>
  )
}

export default ProfileMain
