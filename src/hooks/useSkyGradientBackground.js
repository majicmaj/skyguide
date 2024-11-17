import { useEffect } from 'react'

const skyGradients = [
  {
    time: '12:00 AM',
    gradient: {
      top: 'bg-gray-100 dark:bg-gray-900',
      bottom: 'bg-gray-200 dark:bg-gray-800',
    },
  },
  {
    time: '2:00 AM',
    gradient: {
      top: 'bg-gray-200 dark:bg-indigo-900',
      bottom: 'bg-gray-300 dark:bg-indigo-800',
    },
  },
  {
    time: '4:00 AM',
    gradient: {
      top: 'bg-indigo-100 dark:bg-blue-900',
      bottom: 'bg-indigo-200 dark:bg-blue-800',
    },
  },
  {
    time: '6:00 AM',
    gradient: {
      top: 'bg-purple-100 dark:bg-yellow-900',
      bottom: 'bg-yellow-200 dark:bg-purple-800',
    },
  },
  {
    time: '8:00 AM',
    gradient: {
      top: 'bg-sky-100 dark:bg-blue-900',
      bottom: 'bg-yellow-100 dark:bg-blue-800',
    },
  },
  {
    time: '10:00 AM',
    gradient: {
      top: 'bg-sky-200 dark:bg-blue-900',
      bottom: 'bg-blue-100 dark:bg-blue-800',
    },
  },
  {
    time: '12:00 PM',
    gradient: {
      top: 'bg-sky-300 dark:bg-blue-900',
      bottom: 'bg-blue-200 dark:bg-blue-700',
    },
  },
  {
    time: '2:00 PM',
    gradient: {
      top: 'bg-sky-400 dark:bg-gray-900',
      bottom: 'bg-gray-100 dark:bg-gray-700',
    },
  },
  {
    time: '4:00 PM',
    gradient: {
      top: 'bg-orange-100 dark:bg-yellow-900',
      bottom: 'bg-yellow-200 dark:bg-pink-800',
    },
  },
  {
    time: '6:00 PM',
    gradient: {
      top: 'bg-red-100 dark:bg-pink-900',
      bottom: 'bg-pink-200 dark:bg-purple-700',
    },
  },
  {
    time: '8:00 PM',
    gradient: {
      top: 'bg-purple-100 dark:bg-gray-800',
      bottom: 'bg-gray-200 dark:bg-gray-900',
    },
  },
  {
    time: '10:00 PM',
    gradient: {
      top: 'bg-gray-100 dark:bg-gray-900',
      bottom: 'bg-gray-200 dark:bg-gray-800',
    },
  },
]

const getSkyGradient = () => {
  const hour = new Date().getHours()
  const index = Math.floor(hour / 2)
  return skyGradients[index].gradient
}

const useSkyGradientBackground = () => {
  useEffect(() => {
    const { top, bottom } = getSkyGradient()
    // Apply Tailwind classes with light and dark variations
    document.body.className = `${top} ${bottom} bg-gradient-to-b min-h-screen transition-colors duration-700`
  }, [])
}

export default useSkyGradientBackground
