import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function useOnboardingStatus() {
  const [hasSeen, setHasSeen] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('hasSeenOnboarding').then(value => {
      setHasSeen(value === 'true')
    })
  }, [])

  const completeOnboarding = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true')
    setHasSeen(true)
  }

  return { hasSeen, completeOnboarding }
}
