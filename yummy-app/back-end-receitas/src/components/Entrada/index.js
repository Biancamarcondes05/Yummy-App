import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';

export default function Entrada({navigation}) {

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
              onPress={() => navigation.navigate('Entrada1')}>             
              <Text style={styles.textinho} > Coquetel de Camarão </Text>
            </TouchableOpacity>

      </View>

      <View> 
       <TouchableOpacity style={styles.content}            
              onPress={() => navigation.navigate('Entrada2')}>             
              <Text style={styles.textinho}> Canapés de ricota com azeitona  </Text>
            </TouchableOpacity>

      </View>

      <View> 
       <TouchableOpacity style={styles.content}             
              onPress={() => navigation.navigate('Entrada3')}>             
              <Text style={styles.textinho}> Dadinhos de Tapioca </Text>
            </TouchableOpacity>

      </View>
  
      <View> 
       <TouchableOpacity style={styles.content}            
              onPress={() => navigation.navigate('Entrada4')}>              
              <Text style={styles.textinho} > Polvo ao vinagrete</Text>
            </TouchableOpacity>

      </View>

      <View> 
       <TouchableOpacity style={styles.content}            
              onPress={() => navigation.navigate('Entrada5')}>              
              <Text style={styles.textinho} >Tartar de atum </Text>
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
