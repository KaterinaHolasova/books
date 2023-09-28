import { ThemeOptions } from '@mui/material'

export default function getPalette(): ThemeOptions['palette'] {
  return {
    mode: 'light',
    primary: {
      light: '#8795ac',
      main: '#0F2C59',
      dark: '#0c2347',
    },
    secondary: {
      light: '#ecdfd1',
      main: '#DAC0A3',
      dark: '#ae9982',
    },
    text: {
      primary: '#030911',
      secondary: '#7D8CA1',
    },
    divider: '#ecdfd1',
    background: {
      paper: '#F8F0E5',
      default: '#FFFFFF',
    },
    action: {
      active: '#0F2C59',
    },
  }
}
