import React, { useState } from 'react';
import { View,Text, StyleSheet} from 'react-native';
import { Card, TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'


export default function pages() {

  const inpt_style = {
    colors: {
      primary: '#31405F'
    }
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

 return (
   <View style={styles.body}>
       <Card style={styles.card}>
          <View style={styles.content_card}>
            <Text style={styles.txt_preencha}>Preencha todos os campos corretamente</Text>
            <TextInput label="Nome do produto" style={styles.input_addprod} theme={inpt_style} />
            <TextInput label="Marca do produto" style={styles.input_addprod} theme={inpt_style} />
            <View style={styles.est_picker}>
            <Picker style={styles.picker} selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
                <Picker.Item label="Alimentos" value="java" />
                <Picker.Item label="Beleza" value="js" />
                <Picker.Item label="Higiene" value="java" />
                <Picker.Item label="Limpeza" value="js" />
            </Picker>
            </View>
            <TextInput keyboardType='phone-pad' label="Quantidade" style={styles.input_addprod} theme={inpt_style} />
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
    },

    picker: {
      width: '100%',
      height: 50,
    },

    est_picker: {
      marginTop: 10,
      width: '95%',
      borderWidth: 1,
      borderColor: '#d9d9d9',
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 10
    }
})