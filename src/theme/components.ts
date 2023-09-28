import { Theme, ThemeOptions } from '@mui/material'

export default function getComponents(theme: Theme): ThemeOptions['components'] {
  return {
    MuiAppBar: {
      defaultProps: {
        color: 'default',
        elevation: 1,
      },
      styleOverrides: {
        colorDefault: {
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: 24,
          fontWeight: 700,
          textTransform: 'unset',
        },
        contained: {
          boxShadow: theme.shadows[0],
          ['&:hover']: {
            boxShadow: theme.shadows[0],
          },
        },
        iconSizeMedium: {
          fontSize: 16,
        },
        outlined: {
          border: `2px solid ${theme.palette.secondary.light}`,
          ['&:hover']: {
            background: 'transparent',
            border: `2px solid ${theme.palette.secondary.main}`,
          },
        },
        sizeMedium: {
          padding: theme.spacing(1, 3),
        },
        startIcon: {
          marginLeft: 0,
          marginRight: theme.spacing(2),
          ['&>*:nth-of-type(1)']: {
            fontSize: 'inherit',
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: 2,
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        spacing: { xs: 3, lg: 4 },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: theme.transitions.create('color'),
          ['&:hover']: {
            background: 'transparent',
            color: theme.palette.primary.dark,
          },
        },
        sizeMedium: {
          fontSize: 20,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        underlineNone: {
          transition: theme.transitions.create('color'),
          ['&:hover']: {
            color: theme.palette.primary.dark,
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: { xs: 3, lg: 4 },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.main,
        },
      },
    },
  }
}
