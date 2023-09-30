import { Theme, ThemeOptions } from '@mui/material'
import { alpha, darken } from '@mui/material/styles'

export default function getShadows(theme: Theme): ThemeOptions['shadows'] {
  return [
    'none',
    `0 0 0 2px ${theme.palette.divider}`,
    `0 8px 24px ${alpha(theme.palette.primary.dark, 0.1)}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
    `0 24px 32px -16px ${theme.palette.secondary.dark}`,
  ]
}
