import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: '178px',
    border: '1px solid #CED4DA',
    borderRadius: '4px',
  },
})

const Header: FC = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default Header