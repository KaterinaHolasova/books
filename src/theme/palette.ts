import { ThemeOptions, darken, lighten } from '@mui/material'

const colorPalette = {
  primary: '#0F2C59',
  secondary: '#DAC0A3',
  text: {
    primary: '#030911',
    secondary: '#7D8CA1',
  },
  background: {
    paper: '#F8F0E5',
    default: '#FFFFFF',
  },
}

export default function getPalette(): ThemeOptions['palette'] {
  return {
    mode: 'light',
    primary: {
      light: lighten(colorPalette.primary, 0.5),
      main: colorPalette.primary,
      dark: darken(colorPalette.primary, 0.2),
    },
    secondary: {
      light: lighten(colorPalette.secondary, 0.5),
      main: colorPalette.secondary,
      dark: darken(colorPalette.secondary, 0.2),
    },
    text: colorPalette.text,
    divider: lighten(colorPalette.secondary, 0.5),
    background: colorPalette.background,
    action: {
      active: colorPalette.primary,
    },
  }
}
