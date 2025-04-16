import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { Center, GluestackUIProvider, Text } from '@gluestack-ui/themed'
import { StatusBar } from 'react-native'
import { config } from './config/gluestack-ui.config'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ? (
        <Center flex={1} bgColor="$gray700">
          <Text color="white" fontSize={32}>
            Home
          </Text>
        </Center>
      ) : (
        <></>
      )}
    </GluestackUIProvider>
  )
}
