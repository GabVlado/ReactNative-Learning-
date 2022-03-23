import React from 'react';
import { Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {Tab1Screen} from '../screens/Tab1Screen';
//import {Tab2Screen} from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { TopTabNavigator } from './TopTabNavigator';

import { colores } from '../themes/appTheme';


export const Tabs = (  ) => {

  return  Platform.OS === 'ios'
      ? <TabsIOS />
      : <TabsAndroid />
} 


const BottomTabAndroid = createMaterialBottomTabNavigator();

const  TabsAndroid = (  ) =>  {
  return (
    <BottomTabAndroid.Navigator
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={ ({route}) =>({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
                  
        },
        tabBarLabelStyle: {
          fontSize: 20
        },
        tabBarIcon: ({color, focused}) =>{
          
          let iconName: string = '';
          switch( route.name ){
            case 'Tab1Screen':
              iconName = 'home'
              break
            case 'TopTabNavigator':
              iconName = 'planet'
              break
            case 'StackNavigator':
              iconName = 'bicycle'
              break
          }

          return (
            <Text style={{color}}>      
              <Icon name={iconName} size={25} color= {color}/>
            </Text>)
        },
      })}
      

    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS  = createBottomTabNavigator();

const  TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle= {{
        backgroundColor: 'white'
      }}
      screenOptions={ ({route}) =>({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
                  
        },
        tabBarLabelStyle: {
          fontSize: 20
        },
        tabBarIcon: ({color, focused}) =>{
          
          let iconName: string = '';
          switch( route.name ){
            case 'Tab1Screen':
              iconName = 'home'
              break
            case 'TopTabNavigator':
              iconName = 'planet'
              break
            case 'StackNavigator':
              iconName = 'bicycle'
              break
          }

          return (
            <Text style={{color}}>      
              <Icon name={iconName} size={25} color="white" />
            </Text>)
        },
      })}


    >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1' , tabBarIcon:( props ) => <Text style={{color: props.color}} >Tab11</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}