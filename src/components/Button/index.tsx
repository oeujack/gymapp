import {
  Button as GluestackButton,
  Text,
  ButtonSpinner,
} from '@gluestack-ui/themed'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<typeof GluestackButton> & {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <GluestackButton
      w="$full"
      h="$14"
      bg="$green700"
      borderWidth="$0"
      borderColor="$green500"
      rounded="$sm"
      $active-bg="$green500"
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text color="$white" fontFamily="$heading" fontSize="$sm">
          {title}
        </Text>
      )}
    </GluestackButton>
  )
}
