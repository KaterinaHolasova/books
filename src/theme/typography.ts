import { Theme, ThemeOptions } from '@mui/material'

export default function getTypography(theme: Theme): ThemeOptions['typography'] {
  return {
    h1: {
      fontSize: 32,
      fontWeight: 800,
    },
    h2: {
      fontSize: 24,
      fontWeight: 800,
    },
    h4: {
      fontSize: 16,
      fontWeight: 800,
    },
    h6: {
      fontSize: 20,
      fontWeight: 800,
      [theme.breakpoints.up('lg')]: {
        fontSize: 24,
      },
    },
    body2: {
      color: theme.palette.text.secondary,
    },
  }
}
