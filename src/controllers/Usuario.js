/**
 * Vídeo #1 ao #4: Redux - Módulo 15 - Redux - B7Web
 * Exemplo do uso de Redux.
 * by: Vagner Pinto
 */

import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {editEmail, editSenha} from '../actions/AuthActions';

export class Usuario extends React.Component{ //retirar o default, ele vai para o final, o redux é que será o default

    constructor(props){
        super(props);
        this.state={};
    }

    cadastar(){
        alert('Cadastrou!!!');
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text>Email:</Text>
                    <TextInput value={this.props.email} style={styles.input} onChangeText={(text)=>{this.props.editEmail(text)}} />
                    <Text>Senha:</Text>
                    <TextInput value={this.props.senha} style={styles.input} onChangeText={(text)=>{this.props.editSenha(text)}} />
                    <Text>Confirmar Senha:</Text>
                    <TextInput value={this.props.senha} style={styles.input} onChangeText={(text)=>{this.props.editSenha(text)}} />
                    <TouchableOpacity style={styles.buttonCadastrar} onPress={this.cadastar}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        flex:1
    },
    body:{
        margin:10,
        flex:3
    },
    header:{
        margin:10,
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    image:{
        width:120,
        height:120
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#778899',
        marginBottom:10
    },
    buttonCadastrar: {
        alignItems: "center",
        backgroundColor: "#778899",
        padding:10,
        margin:10
    },
    textButton:{
        fontSize:16,
        color:'#ffffff'
    }
});

const mapStateToProps = (state) => { //mapeia os props do reducer com esse componente
    return {
        email:state.auth.email,
        senha:state.auth.senha
    };
};
const UsuarioConnect = connect(mapStateToProps, {editEmail, editSenha})(Usuario); //conecta os dois componentes (suas props)
export default UsuarioConnect; //exporta o componente como padrão

