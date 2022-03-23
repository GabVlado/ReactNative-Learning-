import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LogBox, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colores } from '../themes/appTheme';

LogBox.ignoreLogs(['[react-native-gesture-handler]'])



export const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = ()  => {


  const { top: paddingTop } =useSafeAreaInsets()

  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={ ({route}) =>({
        tabBarPressColor: colores.primary,
        tabBarShowIcon:true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0
        },        
        tabBarIcon: ({color, focused,}) =>{
          
          let iconName: string = '';
          switch( route.name ){
            case 'Chat':
              iconName = 'chatbox-ellipses-outline'
              break
            case 'Contacts':
              iconName = 'people-outline'
              break
            case 'Albums':
              iconName = 'albums-outline'
              break
          }

          return (
            <Text style={{color}}>
              <Icon name={iconName} size={25} color={colores.primary} />
            </Text>
          )
        }

      })}
      

    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}