import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { Card, TextInput, Button, HelperText, ActivityIndicator, Colors } from 'react-native-paper'
import firebase from '../../firebaseConfig'


export default function Login({navigation}) {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [indicator, setIndicator] = useState(false);
    const [visible, setVisibile] = useState(false);
    const [visiblePass, setVisibilePass] = useState(false);

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

    function FirebaseLogin(){
        if(email == '' || senha == ''){
            if(email == ''){
                setVisibile(true);
            }

            if(senha == ''){
                setVisibilePass(true);
            }
        } else {
        setIndicator(true);
        Keyboard.dismiss()
        firebase.auth().signInWithEmailAndPassword(email, senha).then(()=>{
            navigation.navigate("Home");
            setIndicator(false)
        }).catch(()=>{
            console.log("Não logou");
        })

    }
}

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log("Logado com sucesso", user.uid);
            } else {
                console.log("Não logado");
            }
        })
    }, [])

    function Provisory(){
        navigation.navigate("Home");
    }


 return (
   <View style={styles.body}>
       <ActivityIndicator animating={indicator} size={40} color={Colors.white} />
       <Text style={styles.title}>INVENTORY</Text>
       <Text style={styles.subtitle}>O SEU INVENTÁRIO DIGITAL</Text>
       <Card style={styles.card}>
           <Text style={styles.txtlogin}>LOGIN</Text>
           <TextInput label="Email" style={styles.inpt_email} theme={theme} onChangeText={email => setEmail(email)} value={email} />
           <HelperText type='error' visible={visible}>Campo vazio</HelperText>
           <TextInput label="Senha" style={styles.inpt_senha} theme={theme} onChangeText={senha => setSenha(senha)} value={senha} secureTextEntry={true} />
           <HelperText type='error' visible={visiblePass}>Campo vazio</HelperText>
           <Button mode='contained' style={styles.btn_entrar} onPress={Provisory}>Entrar</Button>
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
        height: 450,
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
        marginTop: 10
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
