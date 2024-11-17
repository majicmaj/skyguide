import {
  AirRounded,
  CompressRounded,
  InvertColorsRounded,
  OpacityRounded,
  ThermostatRounded,
  VisibilityRounded,
  WbCloudyRounded,
  WbSunnyRounded,
  WbTwilightRounded,
} from '@mui/icons-material'
import PropTypes from 'prop-types'

// Define the icons mapping
const VIEWS_ICONS = {
  temperature: ThermostatRounded,
  sun: WbSunnyRounded,
  wind: AirRounded,
  clouds: WbCloudyRounded,
  'uv index': WbTwilightRounded,
  humidity: OpacityRounded,
  visibility: VisibilityRounded,
  pressure: CompressRounded,
  'dew point': InvertColorsRounded,
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
