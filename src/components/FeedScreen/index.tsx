import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MainLayout from 'components/MainLayout'
import FeedHeader from './FeedHeader'
import FeedList from './FeedList'

const useStyles = makeStyles({
  feedList: {
    marginTop: '24px',
  },
})

const FeedScreen: FC = () => {
  const classes = useStyles()
  return (
    <MainLayout>
      <FeedHeader />
      <div className={classes.feedList}>
        <FeedList />
      </div>
    </MainLayout>
  )
}

export default FeedScreen
