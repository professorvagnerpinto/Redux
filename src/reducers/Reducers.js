/**
 * Vídeo #1 ao #4: Redux - Módulo 15 - Redux - B7Web
 * Exemplo do uso de Redux.
 * by: Vagner Pinto
 */

import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';

const Reducers = combineReducers({
    auth:AuthReducer
});
export default Reducers; //utilizado em App.js
