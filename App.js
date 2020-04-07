/**
 * Vídeo #1 ao #4: Redux - Módulo 15 - Redux - B7Web
 * Exemplo do uso de Redux.
 * Obs.:
 *  1. Para instalar as dependências do Navigation utilize o how-to em: https://reactnavigation.org/docs/getting-started/;
 *  2. Para instalar as dependências do Redux execute: (documentação do Redux em: https://redux.js.org/)
 *      npm install --save redux    ou  yarn add redux
 *      npm install --save react-redux  ou  yarn add react-redux
 * by: Vagner Pinto
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Home from './src/controllers/Home';
import Login from './src/controllers/Login';
import Usuario from './src/controllers/Usuario';
import Reducers from './src/reducers/Reducers';

let store = createStore(Reducers); //redux
const Stack = createStackNavigator(); //navigation
function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={ {title: 'Home'} } />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{title: 'Login'}} />
                    <Stack.Screen
                        name="Usuario"
                        component={Usuario}
                        options={{title: 'Cadastrar usuário'}} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
