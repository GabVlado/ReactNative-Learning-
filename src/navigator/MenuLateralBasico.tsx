import React from 'react';
import { useWindowDimensions } from 'react-native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico = () => {
  const dimensions = useWindowDimensions();

  return (


    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerPosition: 'left',
        drawerStyle: {
          width: 240
        },
        headerShown: false  // Oculta la hamburguesa
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title:"Home"}} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{title:"Settings"}} component={ SettingsScreen} />
    </Drawer.Navigator>
  );
}

