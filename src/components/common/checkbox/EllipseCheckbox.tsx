import React, { FC } from 'react'
import { Checkbox, CheckboxProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { EllipseBadge } from '../badge'

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
      icon={<EllipseBadge active={false}>{name}</EllipseBadge>}
      checkedIcon={<EllipseBadge active={true}>{name}</EllipseBadge>}
      {...other}
    />
  )
}

export default EllipseCheckbox
