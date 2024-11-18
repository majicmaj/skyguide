const numericKeys = [
  'temp',
  'feels_like',
  'dew_point',
  'uvi',
  'wind_speed',
  'wind_gust',
  'clouds',
]
const dateKeys = ['sunrise', 'sunset']
const distanceKeys = ['visibility', 'pressure']

export const getFormattedText = (key, current) => {
  if (numericKeys.includes(key)) return current?.[key]?.toFixed(0)
  if (dateKeys.includes(key))
    return new Date(current?.[key] * 1000)
      .toLocaleTimeString()
      .replace(/:\d+ /, ' ')
      .slice(0, -3)

  if (distanceKeys.includes(key)) return (current?.[key] / 1000).toFixed(1)

  return current?.[key]
}

const temperatureKeys = ['temp', 'feels_like', 'dew_point']
const windKeys = ['wind_speed', 'wind_gust']
const pressureKeys = ['pressure']
const percentageKeys = ['clouds', 'humidity', 'pop']

export const getTextUnit = key => {
  if (temperatureKeys.includes(key)) return 'º'
  if (windKeys.includes(key)) return 'm/s'
  if (pressureKeys.includes(key)) return 'hPa'
  if (percentageKeys.includes(key)) return '%'
  if (distanceKeys.includes(key)) return 'km'
  return ''
}

const size8xlKeys = [
  'temp',
  'dew_point',
  'humidity',
  'uvi',
  'clouds',
  'visibility',
]
const size7xlKeys = ['pressure']
const size6xlKeys = ['feels_like', 'wind_speed', 'wind_gust', 'sunrise']
const size5xlKeys = ['sunset']
export const getTextFontsize = text => {
  if (size8xlKeys.includes(text)) return 'text-8xl'
  if (size7xlKeys.includes(text)) return 'text-7xl'
  if (size6xlKeys.includes(text)) return 'text-6xl'
  if (size5xlKeys.includes(text)) return 'text-5xl'
  return 'text-4xl'
}

const unitSize8xlKeys = ['temp']
const unitSize6xlKeys = ['feels_like']
const unitSize3xlKeys = ['wind_speed']
const unitSize2xlKeys = ['wind_gust']
export const getUnitSize = key => {
  if (unitSize8xlKeys.includes(key)) return 'text-8xl'
  if (unitSize6xlKeys.includes(key)) return 'text-6xl'
  if (unitSize3xlKeys.includes(key)) return 'text-3xl'
  if (unitSize2xlKeys.includes(key)) return 'text-2xl'
  return 'text-4xl'
}
