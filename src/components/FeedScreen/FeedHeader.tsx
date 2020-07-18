import React, { FC } from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    padding: '8px 0',
  },
  content: {
    padding: '0',
  },
  common: {
    padding: '16px',
  },
  guide: {
    color: '#000000',
  },
  example: {
    background: 'rgba(206, 212, 218, .2)',
    color: '#495057',
  },
})

const FeedHeader: FC = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography
          className={clsx(classes.common, classes.guide)}
          variant="h2"
          component="h2"
        >
          멘티를 모집하거나, 유용한 정보를 공유해보세요!
        </Typography>
        <Typography
          className={clsx(classes.common, classes.example)}
          variant="h2"
          component="p"
        >
          ex) 저 리액트 네이티브 공부하는 중인데 같이 하실 분 있나요? 멘티 모집이긴
          하지만, 저두 막 잘하는 정도는 아니고 스터디 장 같은 느낌으로 같이 하고
          싶어요!
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small">
          피드 등록!
        </Button>
      </CardActions>
    </Card>
  )
}

export default FeedHeader
