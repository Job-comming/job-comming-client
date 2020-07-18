import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Header from 'components/Header'

const useStyles = makeStyles({
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
  buttonGroup: {
    textAlign: 'right',
  },
})

const FeedHeader: FC = () => {
  const classes = useStyles()
  return (
    <Header>
      <p className={clsx(classes.common, classes.guide)}>
        멘티를 모집하거나, 유용한 정보를 공유해보세요!
      </p>
      <p className={clsx(classes.common, classes.example)}>
        ex) 저 리액트 네이티브 공부하는 중인데 같이 하실 분 있나요? 멘티 모집이긴
        하지만, 저두 막 잘하는 정도는 아니고 스터디 장 같은 느낌으로 같이 하고
        싶어요!
      </p>
      <div className={clsx(classes.common, classes.buttonGroup)}>
        <Button variant="contained" color="primary">
          피드 등록!
        </Button>
      </div>
    </Header>
  )
}

export default FeedHeader
