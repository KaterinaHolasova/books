import { createTheme } from '@mui/material/styles'
import getComponents from './components'
import getTypography from './typography'
import getShape from './shape'
import getPalette from './palette'
import getShadows from './shadows'

export let theme = createTheme()

theme = createTheme(theme, {
  palette: getPalette(),
})

theme = createTheme(theme, {
  shadows: getShadows(theme),
  shape: getShape(),
  typography: getTypography(theme),
})

theme = createTheme(theme, {
  components: getComponents(theme),
})
