import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { DataTable, Card, Button, TouchableRipple } from 'react-native-paper'

export default function pages({navigation}) {

    function AddProduto(){
        navigation.navigate("AddProduto");
    }


 return (
   <View style={styles.body}>
       <View style={styles.content}>
            <Text style={styles.txthome}>Bem vindo, <Text style={styles.username}>Levi Araujo</Text></Text>

            <View style={styles.grid}>
                
                <TouchableOpacity style={styles.btn_add} onPress={AddProduto}>
                    <Image source={require('../img/add.png')} style={styles.img} />
                    <Text style={styles.txtcards}>Adicionar Produto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_add}>
                    <Image source={require('../img/list.png')} style={styles.img} />
                    <Text style={styles.txtcards}>Lista Produto</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.grid}>
                
                <TouchableOpacity style={styles.btn_add}>
                    <Image source={require('../img/bar-chart.png')} style={styles.img} />
                    <Text style={styles.txtcards}>Estatisticas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_add}>
                    <Image source={require('../img/suporte-tecnico.png')} style={styles.img} />
                    <Text style={styles.txtcards}>Suporte</Text>
                </TouchableOpacity>

            </View>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#31405F',
        width: '100%',
        height: '100%'
    },

    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    txthome: {
        color: '#FFF',
        fontSize: 30,
        marginBottom: 15
    },

    username: {
        fontWeight: 'bold',
        
    },

    btn_add: {
        height: 160,
        width: 160,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    grid:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 10
        
    },

    txtcards: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#31405F'
    },

    img: {
        width: 80,
        height: 80,
        marginBottom: 10
    }
})