export const capitalize = str => {
  if (!str) return ''
  if (str.length === 1) return str.toUpperCase()
  return str.charAt(0).toUpperCase() + str.slice(1)
}
