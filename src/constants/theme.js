import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '/tailwind.config.js'

export const { theme: THEME } = resolveConfig(tailwindConfig)

export const COLORS = THEME.colors

export const PRIMARY_COLORS = [
  'pink', // 12:00 AM
  'purple', // 2:00 AM
  'rose', // 4:00 AM
  'rose',
  'orange', // 8:00 AM
  'amber',
  'yellow', // 10:00 AM
  'yellow',
  'yellow',
  'yellow', // 2:00 PM
  'amber',
  'orange',
  'red',
  'red', // 6:00 PM
  'purple',
  'purple', // 8:00 PM
  'pink', // 10:00 PM
]

export const PRIMARY_TEXT_COLORS = [
  'text-pink-500 dark:text-pink-400',
  'text-purple-500 dark:text-purple-400',
  'text-rose-500 dark:text-rose-400',
  'text-orange-500 dark:text-orange-400',
  'text-amber-500 dark:text-amber-400',
  'text-yellow-500 dark:text-yellow-400',
  'text-red-500 dark:text-red-400',
]

export const PRIMARY_BACKGROUND_COLORS = [
  'bg-pink-500 dark:bg-pink-400',
  'bg-purple-500 dark:bg-purple-400',
  'bg-rose-500 dark:bg-rose-400',
  'bg-orange-500 dark:bg-orange-400',
  'bg-amber-500 dark:bg-amber-400',
  'bg-yellow-500 dark:bg-yellow-400',
  'bg-red-500 dark:bg-red-400',
]
