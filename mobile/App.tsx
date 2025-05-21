import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { StatusBar } from "react-native"
import { config } from "./config/gluestack-ui.config"
import { Loading } from "@components/Loading"
import { Routes } from "@routes/index"

import { AuthContext } from "@contexts/AuthContext"

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <AuthContext.Provider
        value={{
          id: "1",
          name: "Jackson dos Santos",
          email: "teste@email.com",
          avatar: "image.png",
        }}
      >
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </GluestackUIProvider>
  )
}
