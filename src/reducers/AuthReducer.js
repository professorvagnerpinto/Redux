/**
 * Vídeo #1 ao #4: Redux - Módulo 15 - Redux - B7Web
 * Exemplo do uso de Redux.
 * by: Vagner Pinto
 */

const initialState = {
    email:'',
    senha:''
};

const AuthReducer = (state=[], action) => {
    if(state.length == 0){
        return initialState;
    }
    if(action.type == 'editEmail'){
        return {...state, email:action.payload.email};
    }
    if(action.type == 'editSenha'){
        return {...state, senha:action.payload.senha};
    }

    return state;
};
export default AuthReducer; //utilizado em Reducers.js
