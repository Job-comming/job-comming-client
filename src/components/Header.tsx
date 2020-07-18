import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  headerRoot: {
    height: '209px',
    border: '1px solid #CED4DA',
    borderRadius: '4px',
  },
})

interface HeaderProps {
  classes?: Record<string, string>
}

const Header: FC<HeaderProps> = ({ children, classes: classesOverride }) => {
  const classes = useStyles({ classes: classesOverride })
  return <div className={classes.headerRoot}>{children}</div>
}

export default Header
