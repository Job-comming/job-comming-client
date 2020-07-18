import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MainLayout from 'components/MainLayout'
import ProfileHeader from './ProfileHeader'
import ProfileMain from './ProfileMain'

const useStyles = makeStyles({
  profileMain: {
    marginTop: '24px',
  },
})

const ProfileScreen: FC = () => {
  const classes = useStyles()
  return (
    <MainLayout>
      <ProfileHeader />
      <div className={classes.profileMain}>
        <ProfileMain />
      </div>
    </MainLayout>
  )
}

export default ProfileScreen
