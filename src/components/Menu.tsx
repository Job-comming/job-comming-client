import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import MenuItem from './MenuItem'

const useStyles = makeStyles({
  root: {
    width: '200px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

const Menu: FC = () => {
  const classes = useStyles()
  const { pathname } = useRouter()

  return (
    <ul className={classes.root}>
      <MenuItem name="피드" pathname="/feed" selected={pathname === '/feed'} />
      <MenuItem
        name="나의 멘토링"
        pathname="/my-mentoring"
        selected={pathname === '/my-mentoring'}
      />
      <MenuItem
        name="프로필"
        pathname="/profile"
        selected={pathname === '/profile'}
      />
    </ul>
  )
}

export default Menu
