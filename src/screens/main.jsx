import React, { useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

export default function MainScreen() {
  const [checked, setChecked] = useState(false)

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev
    })
  }
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text fontWeight="bold">Hello</Text>
        </Box>
        <ThemeToggle />
        <Pressable onPress={handleCheckboxPress} style={styles.checkbox}>
          <AnimatedCheckbox
            checked={checked}
            highlightColor="#4444ff"
            checkmarkColor="#ffffff"
            boxOutlineColor="#4444ff"
          />
        </Pressable>
      </VStack>
    </Center>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkbox: {
    width: 64,
    height: 64
  }
})
