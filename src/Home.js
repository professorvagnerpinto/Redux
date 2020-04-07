/**
 * Vídeo #1 ao #4: Redux - Módulo 15 - Redux - B7Web
 * Exemplo do uso de Redux.
 * by: Vagner Pinto
 */

import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCadastrar} onPress={() => this.props.navigation.navigate('Usuario')}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    buttonLogin: {
        alignItems: "center",
        backgroundColor: "#997788",
        padding:10,
        margin:10
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
    },
});
