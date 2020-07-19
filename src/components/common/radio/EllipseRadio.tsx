import React, { RefForwardingComponent, forwardRef } from 'react'
import { Radio, RadioProps } from '@material-ui/core'
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

interface EllipseRadioProps extends RadioProps {
  text: string
}

const EllipseRadio: RefForwardingComponent<HTMLInputElement, EllipseRadioProps> = (
  props,
  ref,
) => {
  const { text, ...other } = props
  const classes = useStyles()
  return (
    <Radio
      inputRef={ref}
      disableRipple
      className={classes.root}
      color="default"
      icon={<EllipseBadge active={false}>{text}</EllipseBadge>}
      checkedIcon={<EllipseBadge active={true}>{text}</EllipseBadge>}
      {...other}
    />
  )
}

export default forwardRef(EllipseRadio)
