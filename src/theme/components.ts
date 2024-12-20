import { Theme, ThemeOptions } from '@mui/material'

export function getComponents(theme: Theme): ThemeOptions['components'] {
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
          fontWeight: theme.typography.fontWeightBold,
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
            border: `2px solid ${theme.palette.secondary.main}`,
            backgroundColor: 'transparent',
          },
        },
        sizeMedium: {
          padding: theme.spacing(1, 3),
        },
        sizeSmall: {
          padding: theme.spacing(0.5, 2),
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
          fontWeight: theme.typography.fontWeightBold,
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
    MuiCircularProgress: {
      defaultProps: {
        size: 20,
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
          },
          [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(1),
          fontSize: 14,
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.primary.main,
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
          minWidth: 36,
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
          padding: theme.spacing(1, 2),
          fontSize: 14,
          color: theme.palette.primary.main,

          ['&.Mui-selected']: {
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.action.active,
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
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.palette.text.secondary,
          },
        },
      },
    },
  }
}
