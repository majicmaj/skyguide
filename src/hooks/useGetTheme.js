import { extendTheme } from '@mui/joy'
import { COLORS, PRIMARY_COLORS } from '../constants/theme'

// const primaryColor = 'purple'
const shades = [
  '50',
  ...Array.from({ length: 9 }, (_, i) => String((i + 1) * 100)),
]
const getPalette = key => {
  return shades.reduce((acc, shade) => {
    acc[shade] = COLORS[key][shade]
    return acc
  }, {})
}

const getPrimaryColor = () => {
  const hour = new Date().getHours()
  const index = Math.floor(hour / 2)
  console.log('using index', index)
  const color = PRIMARY_COLORS[index]

  return color
}

const useGetTheme = () => {
  const primaryColor = getPrimaryColor()

  const primaryPalette = getPalette(primaryColor) || 'lime'

  const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: primaryPalette,
          background: {
            body: undefined,
          },
        },
      },
      dark: {
        palette: {
          primary: primaryPalette,
          background: {
            body: undefined,
          },
        },
      },
    },
  })

  return theme
}

export default useGetTheme
