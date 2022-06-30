import React from 'react'
import { Button } from '@mui/material'

const SharedButton = ({
  variant = 'contained',
  size = 'small',
  text = 'Button text',
  color = 'primary',
  full = false,
  borderColor = '#D32F2F',
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      fullWidth={full}
      sx={{
        padding: '0.5rem 1.5rem',
        border: `${variant === 'outlined' ? `2px solid ${borderColor}` : ''}`,
      }}
    >
      {text}
    </Button>
  )
}

export default SharedButton
