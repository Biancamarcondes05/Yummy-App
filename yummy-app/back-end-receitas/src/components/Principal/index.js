import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';

export default function Principal({navigation}) {

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
              onPress={() => navigation.navigate('Principal1')}>             
              <Text style={styles.textinho}> Moqueca de peixe </Text>
            </TouchableOpacity>
      </View>

      <View> 
       <TouchableOpacity style={styles.content}            
              onPress={() => navigation.navigate('Principal2')}>             
              <Text style={styles.textinho}> Risoto de frutos do mar </Text>
            </TouchableOpacity>
      </View>

      <View> 
       <TouchableOpacity style={styles.content}            
              onPress={() => navigation.navigate('Principal3')}>              
              <Text style={styles.textinho}> Conchiglione com salmão </Text>
            </TouchableOpacity>
      </View>
  
      <View> 
       <TouchableOpacity style={styles.content}             
              onPress={() => navigation.navigate('Principal4')}>              
              <Text style={styles.textinho} > Linguine com frutos do mar </Text>
            </TouchableOpacity>
      </View>

      <View> 
       <TouchableOpacity style={styles.content}            
              onPress={() => navigation.navigate('Principal5')}>              
              <Text style={styles.textinho}> Hambúrguer de Siri </Text>
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






// import React,{useState} from 'react';
// import { StyleSheet, ImageBackground, Text, View } from 'react-native';
// import { TouchableOpacity, ScrollView } from 'react-native';

// export default function Principal({navigation}) {

//  return (


//     <ImageBackground
//       style={styles.fundo}>
// <View>
//       <View> 
//         <Text> 
//         Selecione a receita desejada:
//         </Text>
//       </View>

//       <View> 
//        <TouchableOpacity
              
//               onPress={() => navigation.navigate('Principal')}>
              
//               <Text > Principal </Text>
//             </TouchableOpacity>

//       </View>

// </View>
//     </ImageBackground>  

//  );
// }
