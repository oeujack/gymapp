import { UserPhoto } from '@components/UserPhoto/index.'
import { HStack, Text, Heading, VStack, Icon } from '@gluestack-ui/themed'
import { LogOut } from 'lucide-react-native'

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={{ uri: 'https://github.com/oeujack.png' }}
        alt="imagem de perfil"
        w="$16"
        h="$16"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Jackson dos Santos
        </Heading>
      </VStack>
      <Icon as={LogOut} color="$gray200" size="xl"/>
    </HStack>
  )
}
