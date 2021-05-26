import React, { useState } from 'react';
import { View,Text, StyleSheet} from 'react-native';
import { Card, TextInput, Button, HelperText, TouchableRipple } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import firebase from '../../firebaseConfig'


export default function pages() {

  const [helperNome, setHelperNome] = useState(false);
  const [helperMarca, setHelperMarca] = useState(false);
  const [helperQnt, setHelperQnt] = useState(false);

  const [nomeProd, setNomeProd] = useState('');
  const [marcaProd, setmarcaProd] = useState('');
  const [qntdProd, setQntProd] = useState('');



  const inpt_style = {
    colors: {
      primary: '#31405F'
    }
  }


  function VerificaCampos(){

    if(nomeProd == '' || marcaProd == '' || qntdProd == ''){
      if(nomeProd == ''){
        setHelperNome(true)
      }

      if(marcaProd == ''){
        setHelperMarca(true)
      }

      if(qntdProd == ''){
        setHelperQnt(true)
      }
    } else {

    firebase.database().ref('Produtos').push(
      
      { nomeproduto: nomeProd, marcaproduto: marcaProd, qntproduto: qntdProd }

    ).then(()=>{
      console.log("Produto adicionado!")
    }).catch(()=>{
      console.log("Produto não adicionado!")
    })

    }
  }


  const [selectedLanguage, setSelectedLanguage] = useState();

 return (
   <View style={styles.body}>
       <Card style={styles.card}>
          <View style={styles.content_card}>
            <Text style={styles.txt_preencha}>Preencha todos os campos corretamente</Text>
            <TextInput label="Nome do produto" style={styles.input_addprod} theme={inpt_style} onChangeText={(text)=> setNomeProd(text)} />
            <HelperText type='error' visible={helperNome}>Campo vazio</HelperText>
            <TextInput label="Marca do produto" style={styles.input_addprod} theme={inpt_style} onChangeText={(text)=> setmarcaProd(text)} />
            <HelperText type='error' visible={helperMarca}>Campo vazio</HelperText>
            <View style={styles.est_picker}>
            <Picker style={styles.picker} selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
                <Picker.Item label="Selecione o tipo" value="java" />
                <Picker.Item label="Alimentos" value="Alimentos" />
                <Picker.Item label="Beleza" value="Beleza" />
                <Picker.Item label="Higiene" value="Higiene" />
                <Picker.Item label="Limpeza" value="Limpeza" />
            </Picker>
            </View>
            <TextInput keyboardType='phone-pad' label="Quantidade" style={styles.input_addprod} theme={inpt_style} onChangeText={(text)=> setQntProd(text)}/>
            <HelperText type='error' visible={helperQnt}>Campo vazio</HelperText>

            <TouchableRipple style={styles.ripple_salvar}>
                <Text style={styles.txt_excluir}>Salvar Mudanças</Text>
            </TouchableRipple>

            <TouchableRipple style={styles.ripple_excluir}>
                <Text style={styles.txt_excluir}>Excluir Registro</Text>
            </TouchableRipple>
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
      width: '95%',
      height: 500,
      display: 'flex',
      paddingRight:10,
      paddingLeft: 10
    },


    txt_preencha: {
      marginTop: 15,
      fontSize: 16,
      fontFamily: 'Roboto-Medium',
      color: '#31405F',
      textAlign: 'center',
    },

    input_addprod: {
      height: 60,
      backgroundColor: '#FFF',
      width: '100%',
    },

    picker: {
      width: '100%',
      height: 50,
    },

    est_picker: {
      marginTop: 10,
      width: '100%',
      borderWidth: 1,
      borderColor: '#d9d9d9',
      borderRadius: 10
    },

    btn_adici: {
      width: '100%',
      marginTop: 10
    },

    ripple_excluir:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F24',
        width: '100%',
        marginTop: 10,
        height: 40,
        elevation: 2
    },

    txt_excluir: {
        color: '#FFF',
        fontFamily: 'Roboto-Bold'
    },

    ripple_salvar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009933',
        width: '100%',
        marginTop: 10,
        height: 40,
        elevation: 2
    }
})