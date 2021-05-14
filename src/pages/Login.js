import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper'


export default function Login({navigation}) {

    const theme = {
        colors: {
            primary: '#31405F',

        },
    }

    const btncad = {
        colors: {
            primary: '#31405F'
        }
    }

    function ScreenHome(){
        navigation.navigate('Home')
    }

 return (
   <View style={styles.body}>
       <Text style={styles.title}>INVENTORY</Text>
       <Text style={styles.subtitle}>O SEU INVENTÁRIO DIGITAL</Text>
       <Card style={styles.card}>
           <Text style={styles.txtlogin}>LOGIN</Text>
           <TextInput label="Email" style={styles.inpt_email} theme={theme} />
           <TextInput label="Senha" style={styles.inpt_senha} theme={theme} />
           <Button mode='contained' style={styles.btn_entrar} onPress={ScreenHome}>Entrar</Button>
           <Button mode='outlined' style={styles.btn_cadastre} theme={btncad}>Cadastre-se</Button>
           <TouchableOpacity>
               <Text style={styles.txtproblem}>Problemas com login?</Text>
           </TouchableOpacity>
       </Card>
   </View>
  );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#31405F',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: '#FFF',
        fontSize: 60,
        fontFamily: 'Roboto-Black'
    },

    subtitle: {
        color: '#FFF',
        fontFamily: 'Roboto-Medium',
        fontSize: 19
    },

    card: {
        marginTop: 20,
        width: '90%',
        height: '50%',
        borderRadius: 15
    },

    txtlogin: {
        textAlign: 'center',
        marginTop: 15,
        fontFamily: 'Roboto-Black',
        fontSize: 25,
        color: '#31405F'
    },

    inpt_email: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFF',
        marginTop: 20,
        color: '#F23'
    },

    inpt_senha: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFF',
        marginTop: 20
    },

    btn_entrar: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        backgroundColor: '#31405F',
        elevation: 3,
        padding: 5,
    },

    btn_cadastre: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 15,
        padding: 5,

    },

    txtproblem: {
      textAlign: 'center',
      marginTop: 10,
      color: '#31405F'
    }
})
