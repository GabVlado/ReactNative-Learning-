import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1 } from '../screens/Pagina1';
import { Pagina2 } from '../screens/Pagina2';
import { Pagina3 } from '../screens/Pagina3';
import { PersonaScreen } from '../screens/PersonaScreen';


export type RootStackParams = {
  Pagina1: undefined,
  Pagina2: undefined,
  Pagina3: undefined,
  PersonaScreen: {id: number, nombre: string},
  }

const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='Pagina2'
      screenOptions={{
        //headerShown: false,
        headerStyle:{
          elevation:0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Pagina1"  options={{title:"Pagina 11"}}  component={Pagina1} />
      <Stack.Screen name="Pagina2"  options={{title:"Pagina 22"}}  component={Pagina2} />
      <Stack.Screen name="Pagina3"  options={{title:"Pagina 33"}}  component={Pagina3} />
      <Stack.Screen name="PersonaScreen"  options={{title:"Persona"}}  component={PersonaScreen} />
      
    </Stack.Navigator>
  );
}


