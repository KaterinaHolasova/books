import { SxProps, Theme } from '@mui/material'

export const wrapperSx: SxProps<Theme> = (theme) => ({
  textAlign: 'left',
  width: '100%',

  ['& img']: {
    transition: theme.transitions.create('opacity'),
  },

  ['&:hover img']: {
    opacity: 0.8,
  },
})
