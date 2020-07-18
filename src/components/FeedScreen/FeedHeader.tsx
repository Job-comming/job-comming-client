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
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '23px',
    color: '#000000',
  },
  example: {
    background: 'rgba(206, 212, 218, .2)',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#495057',
  },
  button: {
    padding: '8px 12px',
  },
})

const FeedHeader: FC = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography
          className={clsx(classes.common, classes.guide)}
          variant="h1"
          component="h1"
        >
          멘티를 모집하거나, 유용한 정보를 공유해보세요!
        </Typography>
        <Typography className={clsx(classes.common, classes.example)} component="p">
          ex) 저 리액트 네이티브 공부하는 중인데 같이 하실 분 있나요? 멘티 모집이긴
          하지만, 저두 막 잘하는 정도는 아니고 스터디 장 같은 느낌으로 같이 하고
          싶어요!
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          피드 등록!
        </Button>
      </CardActions>
    </Card>
  )
}

export default FeedHeader
