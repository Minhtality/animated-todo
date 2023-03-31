import React, { useState } from 'react'
import {
  Box,
  Text,
  useTheme,
  themeTools,
  useColorModeValue,
  HStack
} from 'native-base'
import { Pressable } from 'react-native'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

const TaskItem = ({ isDone = false, handleCheckboxPress = () => {} }) => {
  const theme = useTheme()
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.500', 'blue.400')
  )

  return (
    <HStack space={2} alignItems="center">
      <Box width={30} height={30}>
        <Pressable onPress={handleCheckboxPress}>
          <AnimatedCheckbox
            checked={isDone}
            highlightColor={highlightColor}
            checkmarkColor={useColorModeValue('white', 'black')}
            boxOutlineColor={useColorModeValue('black', 'white')}
          />
        </Pressable>
      </Box>
      <Text>Task</Text>
    </HStack>
  )
}

export default TaskItem
