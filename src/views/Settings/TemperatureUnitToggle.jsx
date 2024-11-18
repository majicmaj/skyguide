import { Button, FormControl, FormLabel, ToggleButtonGroup } from '@mui/joy'
import useStickyState from '../../hooks/useStickyState'

const ELEMENTID = 'select-temperature-unit'

const TemperatureUnitToggle = () => {
  const [unit, setUnit] = useStickyState('metric', 'temperature-unit')

  return (
    <FormControl>
      <FormLabel level='title-md' id={`${ELEMENTID}-label`} htmlFor={ELEMENTID}>
        Theme mode
      </FormLabel>
      <ToggleButtonGroup
        id={ELEMENTID}
        value={unit}
        onChange={(_, value) => value && setUnit(value)}
      >
        <Button value='metric'>°C</Button>
        <Button value='imperial'>°F</Button>
      </ToggleButtonGroup>
    </FormControl>
  )
}

export default TemperatureUnitToggle
