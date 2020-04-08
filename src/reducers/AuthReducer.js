/**
 * Vídeo #1 ao #4: Redux - Módulo 15 - Redux - B7Web
 * Exemplo do uso de Redux.
 * by: Vagner Pinto
 */

const initialState = {
    email:'ana@email.com',
    senha:'teste123'
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
    if(action.type == 'cadastroSucesso'){
        alert('Cadastrado com sucesso.');
        return state;
    }
    if(action.type == 'cadastroErro'){
        alert('Erro retornado: ' + action.payload.code);
        return state;
    }
    if(action.type == 'loginSucesso'){
        alert('Usuario logado com sucesso.');
        return state;
    }
    if(action.type == 'loginErro'){
        alert('Erro retornado: ' + action.payload.code);
        return state;
    }

    return state;
};
export default AuthReducer; //utilizado em Reducers.js
