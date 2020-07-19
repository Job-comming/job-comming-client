import React, { FC } from 'react'
import { Rating } from '@material-ui/lab'
import { Button, Theme, Typography, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    height: '178px',
  },
  myRating: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '250px',
    backgroundColor: 'rgba(206, 212, 218, 0.1)',
  },
  label: {
    color: '#000000',
    marginBottom: '16px',
  },
  starRating: {
    marginBottom: '16px',
  },
  mentoringInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '53px',
    fontWeight: 'bold',
    color: '#000',

    '& p': {
      margin: '4px 0',
    },
  },
  mentoAndMentee: {
    '& span': {
      color: `${theme.palette.primary.main}`,
    },
  },
  depositArea: {
    display: 'flex',
  },
  deposit: {
    fontSize: '2rem',
    lineHeight: '46px',
  },
  chargeButton: {
    marginLeft: '24px',
  },
}))

const ProfileHeader: FC = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.myRating}>
        <Typography className={classes.label} variant="h3" component="p">
          내 별점
        </Typography>
        <Rating
          className={classes.starRating}
          name="my-rating"
          value={4}
          size="large"
          readOnly
        />
        <Typography variant="h3" component="p">
          평점 4/5
        </Typography>
      </CardContent>
      <CardContent className={classes.mentoringInfo}>
        <Typography className={classes.mentoAndMentee} variant="h4" component="p">
          나의 멘티 <span>2</span> / 멘토 <span>1</span>
        </Typography>
        <Typography variant="h3" component="p">
          보유한 디파짓
        </Typography>
        <div className={classes.depositArea}>
          <p className={classes.deposit}>123,130원</p>
          <Button
            className={classes.chargeButton}
            variant="contained"
            color="primary"
            size="large"
          >
            충전
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileHeader
