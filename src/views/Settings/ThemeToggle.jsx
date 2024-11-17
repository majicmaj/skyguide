import {
  DarkModeOutlined,
  LaptopOutlined,
  LightModeOutlined,
} from '@mui/icons-material'
import {
  Button,
  FormControl,
  FormLabel,
  ToggleButtonGroup,
  useColorScheme,
} from '@mui/joy'

const ELEMENTID = 'select-theme-mode'

const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme()

  return (
    <FormControl>
      <FormLabel level='title-md' id={`${ELEMENTID}-label`} htmlFor={ELEMENTID}>
        Theme mode
      </FormLabel>

      <ToggleButtonGroup
        id={ELEMENTID}
        variant='solid'
        value={mode}
        onChange={(_, value) => setMode(value)}
      >
        <Button startDecorator={<LightModeOutlined />} value='light'>
          Light
        </Button>
        <Button startDecorator={<DarkModeOutlined />} value='dark'>
          Dark
        </Button>
        <Button startDecorator={<LaptopOutlined />} value='system'>
          System
        </Button>
      </ToggleButtonGroup>
    </FormControl>
  )
}

export default ThemeToggle
