import { SxProps, Theme } from '@mui/material'

export const imageWrapperSx: SxProps<Theme> = (theme) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: theme.shadows[2],
})
