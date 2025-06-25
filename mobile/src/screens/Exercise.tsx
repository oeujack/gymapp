import {
  Heading,
  HStack,
  Icon,
  VStack,
  Text,
  Box,
  useToast,
  Toast,
  ToastTitle,
} from '@gluestack-ui/themed'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorRouterProps } from '@routes/app.routes'
import { ArrowLeft } from 'lucide-react-native'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Image } from "expo-image";
import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { Button } from '@components/Button'
import { useEffect, useState } from 'react'
import type { ExerciseDTO } from '@dtos/ExerciseDTO'
import { AppError } from '@utils/AppError'
import { api } from '@services/api'

type RouteParamsProps = {
  exerciseId: string;
}

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRouterProps>()
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const route = useRoute()
  const toast = useToast();

  const { exerciseId } = route.params as RouteParamsProps

  function handleGoBack() {
    navigation.goBack()
  }


  async function fetchExerciseDetails() {
    try {
      const response = await api.get(`/exercises/${exerciseId}`);

      setExercise(response.data);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível carregar os detalhes do exercício';


      toast.show({
        placement: "top",
        render: () => (
          <Toast backgroundColor='$red500' action="error" variant="outline">
            <ToastTitle color="$white">{title}</ToastTitle>
          </Toast>
        ),
      });
    }
  }

  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId])

  return (
    <VStack flex={1}>
      <VStack px="$8" bg="$gray600" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt="$4"
          mb="$8"
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize="$lg"
            flexShrink={1}
          >
            {exercise.name}
          </Heading>
          <HStack alignItems="center">
            <BodySvg />

            <Text color="$gray200" ml="$1" textTransform="capitalize">
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack p="$8">
          <Box rounded='lg' mb={3} overflow='hidden'>
            <Image
              source={{ uri: `${api.defaults.baseURL}/exercise/demo/${exercise?.demo}`, }}
              alt="Exercicio"
              contentFit="cover"
              style={{ width: "100%", height: 320, borderRadius: 8 }}
            />
          </Box>

          <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb="$6"
              mt="$5"
            >
              <HStack>
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  {exercise.series} séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="$gray200" ml="$2">
                  {exercise.repetitions} repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
