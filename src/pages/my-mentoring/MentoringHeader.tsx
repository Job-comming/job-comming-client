import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import clsx from 'clsx'

import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  bar: {
    background: '#FFFFFF',
    width: '447px',
    height: '48px',
  },

  string: {
    padding: '13px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '21px',
    color: '#000000',
    float: 'left',
  },

  title: {
    opacity: '0.5',
    paddingLeft: '30px',
  },

  countTitle: {
    paddingLeft: '155px',
  },

  countNumber: {
    color: '#4FCD99',
  },
})

const MentoringHeader: NextPage = () => {
  const classes = useStyles()
  return (
    <p className={classes.bar}>
      <div className={clsx(classes.string, classes.title)}>나의 멘티/멘토 List!</div>
      <div className={clsx(classes.string, classes.countTitle)}>
        나의 멘티 <span className={classes.countNumber}>2</span> / 멘토{' '}
        <span className={classes.countNumber}>1</span>
      </div>
    </p>
  )
}

export default MentoringHeader
