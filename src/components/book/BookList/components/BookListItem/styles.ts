import { SxProps, Theme } from '@mui/material'

export const wrapperSx: SxProps<Theme> = (theme) => ({
  width: '100%',
  alignItems: 'stretch',
  flexDirection: 'column',

  ['& img']: {
    transition: theme.transitions.create('opacity'),
  },

  ['&:hover img']: {
    opacity: 0.8,
  },
})
