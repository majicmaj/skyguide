export const capitalize = str => {
  if (!str) return ''
  const value = String(str)

  if (value.length === 1) return value.toUpperCase()
  return value.charAt(0).toUpperCase() + value.slice(1)
}
