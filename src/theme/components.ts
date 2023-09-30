import { Theme, ThemeOptions } from '@mui/material'

export default function getComponents(theme: Theme): ThemeOptions['components'] {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          ['& .MuiAlert-icon']: {
            color: theme.palette.text.primary,
          },
        },
      },
    },
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
            backgroundColor: 'transparent',
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
          ['&:last-child']: {
            paddingBottom: theme.spacing(2),
          },
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
            ['&:last-child']: {
              paddingBottom: theme.spacing(3),
            },
          },
          [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(4),
            ['&:last-child']: {
              paddingBottom: theme.spacing(4),
            },
          },
        },
      },
    },
    MuiChip: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
        colorPrimary: {
          color: theme.palette.primary.main,
        },
        filled: {
          backgroundColor: theme.palette.background.paper,
          ['&:hover']: {
            backgroundColor: theme.palette.secondary.light,
          },
        },
        icon: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(-1),
        },
        label: {
          padding: theme.spacing(0, 2),
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          fontSize: 14,
          fontWeight: 700,
          marginBottom: theme.spacing(1),
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        spacing: { xs: 2, sm: 3, lg: 4 },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: theme.transitions.create('color'),
          ['&:hover']: {
            backgroundColor: 'transparent',
            color: theme.palette.primary.dark,
          },
        },
        sizeMedium: {
          fontSize: 20,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          ['.MuiMenuItem-root &']: {
            minWidth: theme.spacing(3),
          },
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        paper: {
          minWidth: 80,
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          fontSize: 14,
          padding: theme.spacing(1, 2),

          ['&.Mui-selected']: {
            color: theme.palette.action.active,
            fontWeight: 700,
          },
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
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: `2px solid ${theme.palette.secondary.light}`,
          transition: theme.transitions.create('border-color'),
          ['.MuiInputBase-root.MuiOutlinedInput-root:hover &']: {
            borderColor: theme.palette.secondary.main,
          },
          ['.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused &']: {
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiSkeleton: {
      defaultProps: {
        variant: 'rounded',
      },
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: { xs: 2, sm: 3, lg: 4 },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.main,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body2',
      },
      styleOverrides: {
        root: {
          ['& small']: {
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette.text.secondary,
          },
        },
      },
    },
  }
}
