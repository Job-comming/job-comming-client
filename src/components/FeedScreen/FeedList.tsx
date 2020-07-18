import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FeedItem from './FeedItem'

const useStyles = makeStyles({
  headerRoot: {
    height: '178px',
    padding: '16px',
  },
  newFeed: {
    color: '#000000',
    opacity: '0.5',
    paddingBottom: '10px',
  },
})

const FeedList: FC = () => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.newFeed} variant="h4" component="h4">
        NEW 피드!
      </Typography>
      {Array.from(Array(10).keys()).map((i) => (
        <FeedItem key={i} />
      ))}
    </>
  )
}

export default FeedList
