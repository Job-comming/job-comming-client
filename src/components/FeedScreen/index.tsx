import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MainLayout from 'components/MainLayout'
import FeedHeader from './FeedHeader'
import FeedList from './FeedList'

const useStyles = makeStyles({
    
  feedList: {
  marginTop: '24px',  
  },
  newFeed: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontweight: 'bold',
    fontsize: '12px',
    lineHeight: '21px',
    color: '#000000',
    opacity: '0.5',
    paddingBottom: '10px',
  },
})

const FeedScreen: FC = () => {
  const classes = useStyles()
  return (
    <MainLayout>
      <FeedHeader />
      <div className={classes.feedList}>
        <p className={classes.newFeed}>NEW 피드!</p>
        <FeedList />
      </div>
    </MainLayout>
  )
}

export default FeedScreen
