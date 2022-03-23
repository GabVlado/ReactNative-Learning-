import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';
import { MenuLateral } from './src/navigator/MenuLateral';
//import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
//import { StackNavigator } from './src/navigator/StackNavigator';
// import { Text, View } from 'react-native'

 const App = () => {
  return (
  
    <NavigationContainer>
      <AppState>
        <MenuLateral/>
      </AppState>
    </NavigationContainer>
  )
}

//                            : {children: JSX.Element[]}
const AppState = ( {children} : any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;

