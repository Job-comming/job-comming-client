import React, { FC } from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '15px',
    padding: '5px 10px',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '17px',
    color: `${theme.palette.primary.main}`,
    textAlign: 'center',
  },

  active: {
    backgroundColor: `${theme.palette.primary.main}`,
    color: '#fff',
  },
}))

interface EllipseBadgeProps {
  active?: boolean
}

export const EllipseBadge: FC<EllipseBadgeProps> = ({ children, active }) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, active && classes.active)}>{children}</div>
  )
}
