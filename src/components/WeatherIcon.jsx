import { PropTypes } from 'prop-types'

const WeatherIcon = ({ icon, className = 'h-24 w-24' }) => {
  return <img src={icon} alt='icon' className={`${className} object-contain`} />
}

export default WeatherIcon

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
}
