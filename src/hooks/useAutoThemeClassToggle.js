import { useColorScheme } from '@mui/joy/styles'
import { useEffect } from 'react'

const useAutoThemeClassToggle = () => {
  const { mode, systemMode } = useColorScheme()
  const themeMode = mode === 'system' ? systemMode : mode

  useEffect(() => {
    if (themeMode) {
      document.documentElement.classList.toggle('dark', themeMode === 'dark')
    }
  }, [themeMode])
}

export default useAutoThemeClassToggle
