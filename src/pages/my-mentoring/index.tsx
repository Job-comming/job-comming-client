import { NextPage } from 'next'
import MainLayout from 'components/MainLayout'
import { makeStyles } from '@material-ui/core/styles'
import MentoringHeader from './MentoringHeader'
import MentoringList from './MentoringList'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    width: '720px',
    height: '700px',
    background: 'rgba(206, 212, 218, 0.1)',
    border: '1px solid #CED4DA',
    boxSizing: 'border-box',
    borderRadius: '4px',
    margin: 'auto',
  },
})

const MyMentoringPage: NextPage = () => {
  const classes = useStyles()
  return (
    <MainLayout>
      <div className={classes.root}>
        <MentoringHeader />
        <div>
          <MentoringList />
        </div>
      </div>
    </MainLayout>
  )
}

export default MyMentoringPage
