import { Container, Divider, Typography } from '@mui/joy'
import TemperatureUnitToggle from './TemperatureUnitToggle'
import ThemeToggle from './ThemeToggle'

const Settings = () => {
  return (
    <Container>
      <div className='grid gap-4 py-4'>
        <Typography level='h3'>Theme preferences</Typography>
        <Divider />
        <Typography level='body-md'>
          Choose how the site looks to you. Select a single theme, or sync with
          your system and automatically switch between day and night themes.
        </Typography>
        <ThemeToggle />
        <TemperatureUnitToggle />
      </div>
    </Container>
  )
}

export default Settings
