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
      <FeedItem
        key={1}
        authorName={`박혜원`}
        content="개발자가 되고싶습니다!!"
        level="주니어"
        isOwner={false}
      />
      <FeedItem
        key={2}
        authorName={`이철수`}
        content="제 도움이 필요하신분은 연락주세요~"
        level="시니어"
        isOwner={false}
      />
      <FeedItem
        key={3}
        authorName={`박민수`}
        content="제발 도와주세요~"
        level="주니어"
        isOwner={false}
      />
      <FeedItem
        key={4}
        authorName={`고장호`}
        content="제발 도와주세요~"
        level="주니어"
        isOwner={false}
      />
      <FeedItem
        key={5}
        authorName={`뭉택이`}
        content="제 도움이 필요하신분은 연락주세요~"
        level="시니어"
        isOwner={false}
      />
      <FeedItem
        key={6}
        authorName={`고로쇠`}
        content="제발 도와주세요~"
        level="주니어"
        isOwner={false}
      />
      <FeedItem
        key={7}
        authorName={`주니어`}
        content="제 도움이 필요하신분은 연락주세요~"
        level="시니어"
        isOwner={false}
      />
      <FeedItem
        key={8}
        authorName={`가니시`}
        content="제발 도와주세요~"
        level="주니어"
        isOwner={false}
      />
      <FeedItem
        key={9}
        authorName={`봉팔배`}
        content="제발 도와주세요~"
        level="주니어"
        isOwner={false}
      />
    </>
  )
}

export default FeedList
