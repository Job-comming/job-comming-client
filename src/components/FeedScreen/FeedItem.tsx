import React, { FC } from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: '8px',
    marginBottom: '4px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  title: {
    marginBottom: '25px',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '20px',
  },
  content: {
    fontSize: '16px',
    lineHeight: '23px',
    padding: '12px 0',
    marginBottom: '12px',
  },
  button: {
    padding: '8px 12px',
  },
})

const FeedItem: FC = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h1" component="h1">
          머리다!!!!!!!!!
        </Typography>
        <Typography className={classes.content} component="p">
          몸통이다!!!!!!!!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="outlined" color="primary">
          프로필 보기
        </Button>
      </CardActions>
    </Card>
  )
}

export default FeedItem
