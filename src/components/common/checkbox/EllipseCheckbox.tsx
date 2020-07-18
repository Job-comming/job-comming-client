import React, { FC } from 'react'
import { Checkbox, CheckboxProps, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useEllipseButtonStyles = makeStyles<Theme>((theme) => ({
  root: {
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

interface EllipseButtonProps {
  active?: boolean
}

const EllipseButton: FC<EllipseButtonProps> = ({ children, active }) => {
  const classes = useEllipseButtonStyles()
  return (
    <button className={clsx(classes.root, active && classes.active)}>
      {children}
    </button>
  )
}

const useEllipseCheckboxStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
})

interface EllipseCheckboxProps extends CheckboxProps {
  name: string
}

const EllipseCheckbox: FC<EllipseCheckboxProps> = (props) => {
  const { name, ...other } = props
  const classes = useEllipseCheckboxStyles()
  return (
    <Checkbox
      className={classes.root}
      color="default"
      icon={<EllipseButton active={false}>{name}</EllipseButton>}
      checkedIcon={<EllipseButton active={true}>{name}</EllipseButton>}
      {...other}
    />
  )
}

export default EllipseCheckbox
