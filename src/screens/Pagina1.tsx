import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native';
//import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { TouchableOpacity } from 'react-native-gesture-handler';



//interface Props extends StackScreenProps<any, any>{};

interface Props extends DrawerScreenProps<any , any>{};

export const Pagina1 = ( {navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title='Menu'
                    onPress={() => navigation.toggleDrawer()}
                
                />
            )
        })
    }, [])
    

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 1 Screen</Text>
            <Button
                title= "Ir a pagina 2 "
                onPress={ () =>  navigation.navigate('Pagina2') }
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
                marginLeft: 5
            }}>Navegar con argumentos</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ {
                        ...styles.botonGrande,
                        backgroundColor: '#FFAB3D'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id: 2,
                        nombre: 'Viviana'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Viviana</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
