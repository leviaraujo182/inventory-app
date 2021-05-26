import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import { Card, List, TouchableRipple, Dialog, TextInput, Button } from 'react-native-paper'
import { useState } from 'react/cjs/react.development';
import firebase from '../../firebaseConfig'

export default function ListaProdutos() {

    const [database, setData] = useState([]);
    const [visibleDialog, setVisibileDialog] = useState(false);

    useEffect(()=>{
        const data = firebase.database().ref('Produtos').on('value', function(snap){
            const list = [];
            snap.forEach(function (element){
                list.push(element.val())
            })
            setData(list);
        })
    },[])

 return (
   <View style={styles.body}>
       <Card style={styles.card_content}>
       {database.map((prodlist)=>{
           return (
               <TouchableRipple onPress={()=> setVisibileDialog(true)}>
               <List.Item title={prodlist.nomeproduto} description={prodlist.qntproduto} key={prodlist.qntproduto} style={styles.list_item}/>
               </TouchableRipple>
           )
       })}
       <Dialog visible={visibleDialog}>
                <Dialog.Title>Ações</Dialog.Title>
                <Dialog.Content>
                    <Text>Você deseja editar ou excluir esse registro?</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={()=> setVisibileDialog(false)}>Editar ou Excluir</Button>
                    <Button onPress={()=> setVisibileDialog(false)}>Fechar</Button>
                </Dialog.Actions>
                </Dialog>
       </Card>
   </View>
  );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#31405F',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    card_content: {
        backgroundColor: '#FFF',
        width: '90%',
        height: '80%',
    },

    list_item: {
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 2
    }
})