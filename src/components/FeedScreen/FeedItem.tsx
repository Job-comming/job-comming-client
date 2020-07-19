import React, { FC } from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { EllipseBadge } from 'components/common/badge'

const useStyles = makeStyles({
  root: {
    padding: '4px',
    marginBottom: '6px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  author: {
    marginBottom: '25px',
  },
  authorName: {
    marginRight: '12px',
  },
  content: {
    padding: '12px 0',
    marginBottom: '10px',
  },
})

interface FeedItemProps {
  authorName: string
  content: string
  level: string
  isOwner: boolean
}

const FeedItem: FC<FeedItemProps> = ({ authorName, level, isOwner, content }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.author} variant="h3" component="h3">
          <span className={classes.authorName}>{authorName}</span>
          <EllipseBadge active={true}>{level}</EllipseBadge>
        </Typography>
        <Typography className={classes.content} variant="h2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        {isOwner ? (
          <Button variant="contained" color="primary" size="small">
            피드 수정!
          </Button>
        ) : (
          <Button variant="outlined" color="primary" size="small">
            프로필 보기
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default FeedItem
