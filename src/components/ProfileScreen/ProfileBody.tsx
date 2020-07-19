import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { EllipseCheckbox } from 'components/common/checkbox'
import FeedItem from 'components/FeedScreen/FeedItem'

const useStyles = makeStyles({
  root: {},
  aboutMe: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    lineHeight: '29px',
    color: '#000000',
    marginRight: '16px',
  },
  button: {
    textTransform: 'none',
  },
})

const ProfileBody: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.aboutMe}>
        <div>
          <span className={classes.name}>나는 박혜원</span>
          <EllipseCheckbox text="주니어" disabled />
          <EllipseCheckbox text="#fullstack" disabled />
          <EllipseCheckbox text="#fullstack" disabled />
          <EllipseCheckbox text="#fullstack" disabled />
          <Button className={classes.button} color="secondary">
            edit
          </Button>
        </div>
        <Button className={classes.button} color="primary">
          Logout
        </Button>
      </div>
      <FeedItem
        key={1}
        authorName={`박혜원`}
        content="도와주세요~~"
        level="주니어"
        isOwner={true}
      />
      <FeedItem
        key={2}
        authorName={`박혜원`}
        content="도와드릴까요~"
        level="주니어"
        isOwner={true}
      />
      <FeedItem
        key={3}
        authorName={`박혜원`}
        content="도와주세요~~"
        level="주니어"
        isOwner={true}
      />
      <FeedItem
        key={4}
        authorName={`박혜원`}
        content="도와드릴까요~"
        level="주니어"
        isOwner={true}
      />
    </div>
  )
}

export default ProfileBody
