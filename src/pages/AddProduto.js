import React from 'react';
import { View,Text, StyleSheet, Picker} from 'react-native';
import { Card, TextInput } from 'react-native-paper'


export default function pages() {

  const inpt_style = {
    colors: {
      primary: '#31405F'
    }
  }

 return (
   <View style={styles.body}>
       <Card style={styles.card}>
          <View style={styles.content_card}>
            <Text style={styles.txt_preencha}>Preencha todos os campos corretamente</Text>
            <TextInput label="Nome do produto" style={styles.input_addprod} theme={inpt_style} />
            <TextInput label="Marca do produto" style={styles.input_addprod} theme={inpt_style} />
          
          </View>
       </Card>
   </View>
  );
}

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#31405F',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    card: {
      backgroundColor: '#FFF',
      width: '93%',
      height: 300
    },

    content_card: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    txt_preencha: {
      marginTop: 15,
      fontSize: 16,
      fontFamily: 'Roboto-Medium',
      color: '#31405F'
    },

    input_addprod: {
      width: '95%',
      height: 60,
      backgroundColor: '#FFF',
    }
})