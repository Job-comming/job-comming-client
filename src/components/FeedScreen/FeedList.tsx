import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Header from 'components/HeadFeedList'


const useStyles = makeStyles({
    
common: {
padding: '16px',
  },
  name: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#000000',
  },
  content: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '23px',
    color: '#000000',
  },
  
  buttonGroup: {
    textAlign: 'right',
  },
})

const FeedList: FC = () => {
    const classes = useStyles()
  return (
    <Header>
      <p className={clsx(classes.common, classes.name)}>
      김보민
      </p>
      <p className={clsx(classes.common, classes.content)}>
       풀스택 개발 실전 경험 쌓고 싶습니다!! 멘토님 구해요!! 
      </p>
      <div className={clsx(classes.common, classes.buttonGroup)}>
       <Button variant="outlined" color="primary">
           프로필 보기
        </Button>
      </div>
    </Header>
  )
}

export default FeedList
