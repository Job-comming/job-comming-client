import React, { FC } from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '29px',
    cursor: 'pointer',
  },

  underline: {
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 3,
      backgroundColor: `${theme.palette.primary.main}`,
      zIndex: 1,
      width: 0,
      transition: 'width .5s ease 0s, right .5s ease 0s',
    },

    '&:hover:after': {
      width: '100%',
      right: 0,
    },
  },
}))

interface MenuItemProps {
  name: string
}

const MenuItem: FC<MenuItemProps> = ({ name }) => {
  const classes = useStyles()
  return (
    <li className={classes.root}>
      <span className={classes.underline}>{name}</span>
    </li>
  )
}

export default MenuItem
