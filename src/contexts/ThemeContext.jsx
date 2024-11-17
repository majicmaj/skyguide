import useAutoThemeClassToggle from '@/hooks/useAutoThemeClassToggle'
import { CssBaseline } from '@mui/joy'
import { CssVarsProvider } from '@mui/joy/styles'
import PropType from 'prop-types'
import useGetTheme from '../hooks/useGetTheme'

const ThemeContext = ({ children }) => {
  const theme = useGetTheme()
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
