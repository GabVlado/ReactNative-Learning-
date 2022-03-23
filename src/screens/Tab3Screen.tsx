import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export const Tab3Screen = () => {

  useEffect(() => {
    console.log('Tab3Screen Effect');
  
  }, [])
  

  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  )
}


