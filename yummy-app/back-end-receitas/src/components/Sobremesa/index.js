import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';

export default function Sobremesa({navigation}) {

 return (


    <ImageBackground
      style={styles.tudo}>
<View>
      <View> 
        <Text style={styles.cabecalho}> 
        Selecione a receita desejada:
        </Text>
      </View>

      < View style ={styles.all}> 
      <View style ={styles.catsone}>  
       <TouchableOpacity style={styles.content}                 
              onPress={() => navigation.navigate('Sobremesa1')}>             
              <Text  style={styles.textinho} > Sobremesa tropical </Text>
            </TouchableOpacity>

      </View>

      <View> 
       <TouchableOpacity style={styles.content}                 
              onPress={() => navigation.navigate('Sobremesa2')}>             
              <Text  style={styles.textinho} >Pavê de morango  </Text>
            </TouchableOpacity>

      </View>

      <View> 
       <TouchableOpacity style={styles.content}                 
              onPress={() => navigation.navigate('Sobremesa3')}>             
              <Text style={styles.textinho} > Torta de Bis </Text>
            </TouchableOpacity>

      </View>
  
      <View> 
       <TouchableOpacity style={styles.content}                
              onPress={() => navigation.navigate('Sobremesa4')}>              
              <Text style={styles.textinho} > Doce de abóbora</Text>
            </TouchableOpacity>

      </View>

      <View> 
       <TouchableOpacity style={styles.content}               
              onPress={() => navigation.navigate('Sobremesa5')}>              
              <Text style={styles.textinho} > Ambrosia </Text>
            </TouchableOpacity>
      </View>
      </View>
      </View>
        </ImageBackground>  
 );
}

const styles = StyleSheet.create({
tudo:{
    backgroundColor: '#859497',
    width: '100%',
    height: '100%',
},
cabecalho:{
  color: '#000000',
  marginTop: 75,
  fontSize: 28,
  textAlign: 'center',
  margin: 2,
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
