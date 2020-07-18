import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from './MenuItem'

const useStyles = makeStyles({
  root: {
    width: '200px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

const Menu: FC = () => {
  const classes = useStyles()
  return (
    <ul className={classes.root}>
      <MenuItem name="피드" />
      <MenuItem name="나의 멘토링" />
      <MenuItem name="프로필" />
    </ul>
  )
}

export default Menu
