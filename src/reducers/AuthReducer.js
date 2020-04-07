/**
 * Vídeo #1 ao #4: Redux - Módulo 15 - Redux - B7Web
 * Exemplo do uso de Redux.
 * by: Vagner Pinto
 */

const initialState = {
    email:'email@email.com.br',
    senha:'123456'
};

const AuthReducer = (state=[], action) => {
    if(state.length == 0){
        return initialState;
    }

    return state;
};
export default AuthReducer; //utilizado em Reducers.js
