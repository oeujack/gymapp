import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { Home } from '@screens/Home'
import { History } from '@screens/History'
import { Profile } from '@screens/Profile'
import { Exercise } from '@screens/Exercise'

type AppRoutesProps = {
  home: undefined
  exercise: undefined
  profile: undefined
  history: undefined
}

export type AppNavigatorRouterProps = BottomTabNavigationProp<AppRoutesProps>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  )
}
