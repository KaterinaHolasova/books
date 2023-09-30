import { ThemeOptions } from '@mui/material'
import { alpha, darken, lighten } from '@mui/material/styles'

const colorPalette = {
  primary: '#0f2c59',
  secondary: '#dac0a3',
  text: {
    primary: '#030911',
    secondary: '#7d8ca1',
  },
  background: {
    paper: '#f8f0e5',
    default: '#ffffff',
  },
}

export function getPalette(): ThemeOptions['palette'] {
  return {
    mode: 'light',
    primary: {
      light: lighten(colorPalette.primary, 0.4),
      main: colorPalette.primary,
      dark: darken(colorPalette.primary, 0.4),
    },
    secondary: {
      light: lighten(colorPalette.secondary, 0.4),
      main: colorPalette.secondary,
      dark: darken(colorPalette.secondary, 0.4),
    },
    text: colorPalette.text,
    divider: lighten(colorPalette.secondary, 0.4),
    background: colorPalette.background,
    action: {
      active: colorPalette.primary,
      hover: alpha(colorPalette.primary, 0.05),
      hoverOpacity: 0.05,
      focus: alpha(colorPalette.primary, 0.1),
    },
  }
}
