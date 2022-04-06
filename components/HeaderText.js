import React from 'react'
import { Typography } from '@mui/material'


export function PrimaryHeader({children}) {
  return (
    <Typography variant="h1" component="h1">{children}</Typography>
  )
}

export function SecondaryHeader({children}) {
    return (
        <Typography variant="h2" component="h2">{children}</Typography>
    )
  }