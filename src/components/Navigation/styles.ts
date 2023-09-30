import { SxProps, Theme } from '@mui/material'

const height = { xs: 64, sm: 80, lg: 96 }

export const containerSx: SxProps<Theme> = () => ({
  height: height,
})

export const wrapperSx =
  (trigger: boolean): SxProps<Theme> =>
  ({ transitions }) => ({
    flexDirection: 'column',
    justifyContent: 'center',
    display: 'flex',
    height: trigger ? { xs: height.xs - 8, sm: height.sm - 16, lg: height.lg - 16 } : height,
    px: { xs: 2, sm: 3, lg: 4 },
    py: 1,
    transition: transitions.create('height'),
  })
