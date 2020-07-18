import React, { FC } from 'react'
import { Rating } from '@material-ui/lab'
import { Button, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from 'components/Header'

const useStyles = makeStyles<Theme>((theme) => ({
  profileHeader: {
    display: 'flex',
    height: '100%',
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
    fontSize: '32px',
    lineHeight: '46px',
  },
  chargeButton: {
    marginLeft: '24px',
  },
}))

const ProfileHeader: FC = () => {
  const classes = useStyles()
  return (
    <Header>
      <div className={classes.profileHeader}>
        <div className={classes.myRating}>
          <Typography className={classes.label} variant="h3" component="p">
            내 별점
          </Typography>
          <Rating
            className={classes.starRating}
            name="my-rating"
            value={2}
            size="large"
            readOnly
          />
          <Typography variant="h3" component="p">
            평점 3/5
          </Typography>
        </div>
        <div className={classes.mentoringInfo}>
          <Typography className={classes.mentoAndMentee} variant="h4" component="p">
            나의 멘티 <span>2</span> / 멘토 <span>1</span>
          </Typography>
          <Typography variant="h3" component="p">
            보유한 디파짓
          </Typography>
          <div className={classes.depositArea}>
            <p className={classes.deposit}>2,123,130,000원</p>
            <Button
              className={classes.chargeButton}
              variant="contained"
              color="primary"
            >
              충전
            </Button>
          </div>
        </div>
      </div>
    </Header>
  )
}

export default ProfileHeader
