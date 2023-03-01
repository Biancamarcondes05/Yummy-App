import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';

export default function Drinks({navigation}) {

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
                onPress={() => navigation.navigate('Drink1')}>                
                <Text style={styles.textinho}> Blue Hawaiian </Text>
              </TouchableOpacity>
        </View>

        <View> 
        <TouchableOpacity style={styles.content}               
                onPress={() => navigation.navigate('Drink2')}>
                <Text style={styles.textinho}> Caribbean Splash </Text>
              </TouchableOpacity>
        </View>

        <View> 
        <TouchableOpacity style={styles.content}           
                onPress={() => navigation.navigate('Drink3')}>      
                <Text style={styles.textinho}> Mojito </Text>
              </TouchableOpacity>
        </View>
    
        <View> 
        <TouchableOpacity style={styles.content}              
                onPress={() => navigation.navigate('Drink4')}>              
                <Text style={styles.textinho}> Tequila Sunrise </Text>
              </TouchableOpacity>
        </View>

        <View> 
        <TouchableOpacity  style={styles.content}            
                onPress={() => navigation.navigate('Drink5')}>             
                <Text style={styles.textinho}> Piña Colada </Text>
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
