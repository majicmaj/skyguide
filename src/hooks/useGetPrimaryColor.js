import { PRIMARY_COLORS } from '../constants/theme'

const getPrimaryColor = () => {
  const hour = new Date().getHours()
  const index = Math.floor(hour / 2)
  return PRIMARY_COLORS[index]
}

export const useGetPrimaryColor = () => {
  const primaryColor = getPrimaryColor()

  return primaryColor
}
