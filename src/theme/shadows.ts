import { Theme, ThemeOptions, darken } from '@mui/material'

export default function getShadows(theme: Theme): ThemeOptions['shadows'] {
  return [
    'none',
    `0 0 0 2px ${theme.palette.divider}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
    `0 16px 32px -16px ${darken(theme.palette.secondary.main, 0.8)}`,
  ]
}
