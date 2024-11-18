import {
  AirRounded,
  CompressRounded,
  InvertColorsRounded,
  OpacityRounded,
  ThermostatRounded,
  VisibilityRounded,
  WaterDropRounded,
  WbCloudyRounded,
  WbSunnyRounded,
  WbTwilightRounded,
} from '@mui/icons-material'
import PropTypes from 'prop-types'

// Define the icons mapping
const VIEWS_ICONS = {
  temperature: ThermostatRounded,
  rain: WaterDropRounded,
  sun: WbSunnyRounded,
  'uv index': WbTwilightRounded,
  wind: AirRounded,
  clouds: WbCloudyRounded,
  humidity: OpacityRounded,
  'dew point': InvertColorsRounded,
  visibility: VisibilityRounded,
  pressure: CompressRounded,
}

const ViewIcon = ({ view }) => {
  const IconComponent = VIEWS_ICONS[view]
  return IconComponent ? (
    <IconComponent
      sx={{
        color: 'inherit',
      }}
    />
  ) : null
}

export default ViewIcon

ViewIcon.propTypes = {
  view: PropTypes.string.isRequired,
}
