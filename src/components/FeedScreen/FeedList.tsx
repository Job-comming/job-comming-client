import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FeedItem from './FeedItem'

const useStyles = makeStyles({
  headerRoot: {
    height: '178px',
    padding: '16px',
  },
  newFeed: {
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '21px',
    color: '#000000',
    opacity: '0.5',
    paddingBottom: '10px',
  },
})

const FeedList: FC = () => {
  const classes = useStyles()
  return (
    <>
      <p className={classes.newFeed}>NEW 피드!</p>
      {Array.from(Array(10).keys()).map((i) => (
        <FeedItem key={i} />
      ))}
    </>
  )
}

export default FeedList
