import React, { FC, memo } from 'react'
import Link from 'next/link'
import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface StyleProps {
  selected: boolean
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    cursor: 'pointer',
    lineHeight: '40px',
  },

  underline: {
    position: 'relative',
    padding: '5px 0',
    '&:after': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: ({ selected }) => `${selected ? 0 : undefined}`,
      height: 3,
      backgroundColor: `${theme.palette.primary.main}`,
      zIndex: 1,
      width: ({ selected }) => `${selected ? '100%' : '0'}`,
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
  pathname: string
  selected: boolean
}

const MenuItem: FC<MenuItemProps> = ({ name, pathname, selected }) => {
  const classes = useStyles({ selected })

  return (
    <li className={classes.root}>
      <Link href={pathname}>
        <span className={classes.underline}>{name}</span>
      </Link>
    </li>
  )
}

export default memo(MenuItem)
