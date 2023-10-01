import { SxProps, Theme } from '@mui/material'

export const imageWrapperSx: SxProps<Theme> = (theme) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  boxShadow: theme.shadows[3],
  borderRadius: '8px',
})
