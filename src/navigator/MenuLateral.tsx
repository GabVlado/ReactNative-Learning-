import React from 'react';
import { Image,Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'; 
import { createDrawerNavigator, 
  DrawerContentComponentProps, 
  DrawerContentScrollView, 
  DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';

import { SettingsScreen } from '../screens/SettingsScreen';
//import { StackNavigator } from './StackNavigator';

import { colores, styles } from '../themes/appTheme';
import { Tabs } from './Tabs';
//import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();


export const  MenuLateral = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={({navigation})=> ({
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerPosition: 'left',
        drawerStyle: {
          width: 240
        },
        headerLeft: () =>(
          <TouchableOpacity
            style={{
              marginLeft: 10 
            }}
            onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
          >
          
            
            <Icon name="grid-outline" size={30} color={colores.primary} />
          </TouchableOpacity>
          
        )

      })}

      drawerContent={ (props) => <MenuInterno {...props} />}
      
    >

      <Drawer.Screen name="Tabs"  component={ Tabs } />
      <Drawer.Screen name="SettingsScreen"  component={ SettingsScreen} />
    </Drawer.Navigator>
  );
}



const MenuInterno = ( {navigation}:DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView >

      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de Menu */}
      <View style={styles.menuContainer}>

        <TouchableOpacity 
          style= {styles.menuBoton}
          onPress={() => navigation.navigate("Tabs")}
        > 
          <Text style={styles.menuBotonIcon}>
            <Icon name="compass-outline" size={20} color={colores.primary} />
          </Text>
          <Text style={styles.menuTexto}>Navegacion </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style= {styles.menuBoton}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Text style={styles.menuBotonIcon}>
            <Icon  name="settings-outline" size={20} color={colores.primary}/>
          </Text>
          <Text style={styles.menuTexto}>Settings</Text>
        </TouchableOpacity>

      </View>


    </DrawerContentScrollView>
  )
}