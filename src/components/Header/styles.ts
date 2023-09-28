import { SxProps, Theme } from '@mui/material'

const headerHeight = { xs: 64, sm: 80, lg: 96 }

export const containerSx: SxProps<Theme> = () => ({
  height: headerHeight,
})

export const wrapperSx =
  (trigger: boolean): SxProps<Theme> =>
  ({ transitions }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: trigger
      ? { xs: headerHeight.xs - 8, sm: headerHeight.sm - 16, lg: headerHeight.lg - 16 }
      : headerHeight,
    px: { xs: 2, sm: 3, lg: 4 },
    py: 1,
    transition: transitions.create('height'),
  })
