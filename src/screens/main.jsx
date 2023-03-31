import React, { useState } from 'react'
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
import TaskItem from '../components/task-item'

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
        <TaskItem isDone={checked} handleCheckboxPress={handleCheckboxPress} />
      </VStack>
    </Center>
  )
}
