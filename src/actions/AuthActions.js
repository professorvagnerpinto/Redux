import firebase from '../services/FirebaseConnetion';

export const editEmail = (email) => {
    return {
        type:'editEmail',
        payload:{
            email:email
        }
    };
};

export const editSenha = (senha) => {
    return {
        type:'editSenha',
        payload:{
            senha:senha
        }
    };
};

export const cadastrar = (email, senha) => {
    console.log('Chamou cadastrar. Aguarde o dispatch...');
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((user) => {
                console.log('Chamou dispatch. Aguarde...');
                dispatch({
                    type:'cadastroSucesso'
                });
            })
            .catch((error) => {
                console.log('Erro no cadastro do firebase.' + error.message);
                dispatch({
                    type:'cadastroErro',
                    payload:{
                        code:error.code
                    }
                });
            });
    };
};

export const entrar = (email, senha) => {
    return (dispatch) => {
        console.log('Chamou entrar. Aguarde o dispatch...');
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then( () => {
                console.log('Usuário logado no firebase.');
                dispatch({
                    type:'loginSucesso'
                });
            })
            .catch( (error) => {
                console.log('Erro ao logar no firebase. ' + error.message + ' ' + error.code);
                dispatch({
                    type:'loginErro',
                    payload:{
                        code:error.code
                    }
                });
            });
    };
};
