import React, { RefForwardingComponent, forwardRef } from 'react'
import { Checkbox, CheckboxProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { EllipseBadge } from '../badge'

const useStyles = makeStyles({
  root: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
})

interface EllipseCheckboxProps extends CheckboxProps {
  text: string
}

const EllipseCheckbox: RefForwardingComponent<
  HTMLInputElement,
  EllipseCheckboxProps
> = (props, ref) => {
  const { text, ...other } = props
  const classes = useStyles()
  return (
    <Checkbox
      inputRef={ref}
      className={classes.root}
      color="default"
      icon={<EllipseBadge active={false}>{text}</EllipseBadge>}
      checkedIcon={<EllipseBadge active={true}>{text}</EllipseBadge>}
      {...other}
    />
  )
}

export default forwardRef(EllipseCheckbox)
