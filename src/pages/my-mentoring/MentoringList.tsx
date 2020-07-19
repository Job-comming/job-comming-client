import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import { Typography, Button } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
  common: {
    marginTop: '15px',
    marginLeft: '20px',
    width: '400px',
    height: '52px',
    background: '#FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '4px',
  },

  slelctedButton: {
    border: '2px solid #4FCD99',
  },

  normalButton: {
    border: '1px solid #CED4DA',
  },

  name: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px',
    paddingRight: '10px',
    color: '#000000',
  },

  time: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    paddingRight: '17px',
    color: '#000000',
    opacity: '0.5',
    paddingLeft: '230px',
  },
})

const MentoringList: NextPage = () => {
  const classes = useStyles()
  return (
    <ul>
      <li>
        <Button className={clsx(classes.common, classes.slelctedButton)}>
          <span className={classes.name}>김보민</span>
          <span>스티커</span>
          <span className={classes.time}>방금</span>
        </Button>
      </li>
      <li>
        <Button className={clsx(classes.common, classes.normalButton)}>
          <span className={classes.name}>김수아</span>
          <span>스티커</span>
          <span className={classes.time}>1분전</span>
        </Button>
      </li>
    </ul>
  )
}

export default MentoringList
