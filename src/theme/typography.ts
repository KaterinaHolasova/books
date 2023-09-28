import { Theme, ThemeOptions } from '@mui/material'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export default function getTypography(theme: Theme): ThemeOptions['typography'] {
  return {
    fontFamily: nunitoSans.style.fontFamily,
    h2: {
      fontSize: 32,
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
