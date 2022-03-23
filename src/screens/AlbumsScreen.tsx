import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext'

export const AlbumsScreen = () => {


  const { logout , authState} = useContext(AuthContext)
  const {isLoggedIn} = authState


  return (
      <View style={styles.globalMargin}>
        <Text style={styles.title}>Album Screen</Text>

        { isLoggedIn &&
          
          <Button
            title='Logout'
            onPress={  logout }
          
          />

        } 
    </View>
      


  )
}


