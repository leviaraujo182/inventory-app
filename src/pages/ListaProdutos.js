import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import { Card, List, TouchableRipple } from 'react-native-paper'
import { useState } from 'react/cjs/react.development';
import firebase from '../../firebaseConfig'

export default function ListaProdutos() {

    const [database, setData] = useState([]);

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
       {database.map((pqp)=>{
           return (
               <TouchableRipple onPress={()=> console.log("Testando")}>
               <List.Item title={pqp.nomeproduto} description={pqp.qntproduto} key={pqp.qntproduto} style={styles.list_item}/>
               </TouchableRipple>
           )
       })}
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