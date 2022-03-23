import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'

interface Props extends StackScreenProps<any, any>{};

export const Pagina3 = ( {navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina 3 Screen</Text>
            <Button
                title="Regresar"
                onPress={()=>  navigation.pop()}
            />

            <Button
                title="Ir a la Pagina 1"
                onPress={()=>  navigation.popToTop()}
            />

        </View>
    )
}

