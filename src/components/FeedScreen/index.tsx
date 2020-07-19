import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MainLayout from 'components/MainLayout'
import FeedHeader from './FeedHeader'
import FeedList from './FeedList'
import useRequest from 'hooks/useRequest'

const useStyles = makeStyles({
  feedList: {
    marginTop: '15px',
  },
})

const FeedScreen: FC = () => {
  const classes = useStyles()
  const { data } = useRequest(`/feeds`)

  console.log(data)

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
