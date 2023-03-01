import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';

export default function Categorias({navigation}) {

 return (


    <ImageBackground
      
      style={styles.tudo}>

      <View> 
        <Text style={styles.cabecalho}> 
        Selecione :
        </Text>
      </View>

      < View style ={styles.all}> 
      < View style ={styles.catsone}> 
       <TouchableOpacity style={styles.content}             
              onPress={() => navigation.navigate('Entrada')}>              
              <Text style={styles.textinho}> Entradas </Text>
            </TouchableOpacity>
      </View>

      <View style ={styles.cats}> 
       <TouchableOpacity style={styles.content}           
              onPress={() => navigation.navigate('Principal')}>   
              <Text style={styles.textinho}> Pratos principais </Text>
            </TouchableOpacity>
      </View>

      <View style ={styles.cats}> 
       <TouchableOpacity style={styles.content} 
              onPress={() => navigation.navigate('Sobremesa')}>              
              <Text style={styles.textinho}> Sobremesas </Text>
            </TouchableOpacity>
      </View>

      <View style ={styles.cats}> 
       <TouchableOpacity style={styles.content}               
              onPress={() => navigation.navigate('Drinks')}>              
              <Text style={styles.textinho}> Drinks </Text>
            </TouchableOpacity>
      </View>
      </View>



</ImageBackground>

 );

}

const styles = StyleSheet.create({

cabecalho:{
  color: '#000000',
  marginTop: 75,
  fontSize: 28,
  textAlign: 'center',
  margin: 2,
},
 
 tudo:{
    backgroundColor: '#859497',
    width: '100%',
    height: '100%',
 },

 all:{
   flexDirection: 'column',
   textAlign: 'center',
   alignItems:'center',

 },

 catsone:{
   color: '#000000',
   textAlign: 'center',
   marginTop: 45,
 },
 content:{
   borderColor: '#ff9900',
   borderWidth: 3,
   borderRadius: 100,
   width: 350,
   height: 80,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 20,
 },
 textinho:{
   color: '#000000',
   fontSize: 26,
 },
});




