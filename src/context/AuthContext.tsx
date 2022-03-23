import * as React from 'react';

import { createContext , useReducer } from "react";

//Definir que informacion voy a grabar 
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string
}

//Estado Inicial 
export const  authInitialState: AuthState = {
    isLoggedIn:false,
    username: undefined,
    favoriteIcon: undefined,
}


// Lo que va dentro del createContext - lo que expone el context

export interface AuthContextProps {
    authState:  AuthState,
    signIn: () => void,
    logout: () => void,
    changeFavoriteIcon: (iconName: string) => void,
    changeUsername: (username: string) => void,
 
}



//Crear el Contexto 
export const AuthContext = createContext({} as AuthContextProps)



//Componente proveedor del estado 

export const AuthProvider =  ( {children}: any ) => {

    //Genera un nuevo estado 
    const [authState, dispatch] = useReducer( authReducer, authInitialState);

    const signIn = (  ) => {
        dispatch({type: 'signIn'})
    }

    const changeFavoriteIcon = ( iconName: string  ) => {
        dispatch({type:'changeFavIcon', payload: iconName})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeUsername = ( username: string) => {
        dispatch({type:'changeUsername', payload: username})
    }

    return (
        <AuthContext.Provider  value={{
            authState,
            signIn,
            logout,
            changeUsername,
            changeFavoriteIcon
         }}>
            {children}
        </AuthContext.Provider>
    )
}
