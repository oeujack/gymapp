import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {fontsLoaded ? (
        <Text>Open up App.tsx to start working on your app!</Text>
      ) : (
        <></>
      )}
      <StatusBar style="auto" />
    </View>
  )
}
