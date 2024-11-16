import { COLORS } from '@/constants/theme'
import useAutoThemeClassToggle from '@/hooks/useAutoThemeClassToggle'
import { CssBaseline } from '@mui/joy'
import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import PropType from 'prop-types'

const primaryColor = 'purple'
const shades = [
  '50',
  ...Array.from({ length: 9 }, (_, i) => String((i + 1) * 100)),
]

const getPalette = (key = primaryColor) => {
  return shades.reduce((acc, shade) => {
    acc[shade] = COLORS[key][shade]
    return acc
  }, {})
}

const primaryPalette = getPalette(primaryColor)

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: primaryPalette,
      },
    },
    dark: {
      palette: {
        primary: primaryPalette,
      },
    },
  },
})

const ThemeContext = ({ children }) => {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <AutoThemeToggle />
      {children}
    </CssVarsProvider>
  )
}

const AutoThemeToggle = () => {
  useAutoThemeClassToggle()
  return null
}

ThemeContext.propTypes = {
  children: PropType.node,
}

export default ThemeContext
