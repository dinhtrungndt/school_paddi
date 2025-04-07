import { View, Text, Button } from 'react-native'
import { useRouter } from 'expo-router'
import { useOnboardingStatus } from '../hooks/useOnboarding'

export default function Welcome() {
  const { completeOnboarding } = useOnboardingStatus()
  const router = useRouter()

  const handleStart = async () => {
    await completeOnboarding()
    router.replace('/(tabs)/home')
  }

  return (
    <View>
      <Text>Welcome to the app!</Text>
      <Button title="Get Started" onPress={handleStart} />
    </View>
  )
}
