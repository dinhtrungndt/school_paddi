import { Redirect } from 'expo-router'
import { useOnboardingStatus } from './hooks/useOnboarding.js'
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux';
import store from './stores/redux/store.js'
import { ROUTES } from './constants/routes/index.js'
import { COLORS } from './constants/ui/colors/colors.js'

export default function Index() {
  const { hasSeen } = useOnboardingStatus()

  if (hasSeen === null) return <ActivityIndicator size="small" color={COLORS.COLORS.PRIMARY} />

  return (
    <Provider store={store}>
      <Redirect href={hasSeen ? ROUTES.TABHOME : ROUTES.SPLASH} />
    </Provider>
  )
}
