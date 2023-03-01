import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Drink2({navigation}) {
    const [defaultRating, setDefaultRating] = useState(0); 
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]); 
  const Avaliacao = () => { 
    return ( 
      <View style={styles.ratingBarStyle}> 
        {maxRating.map((item, key) => { 
          return ( 
            <TouchableOpacity 
              activeOpacity={0.7} 
              key={item} 
              onPress={() => setDefaultRating(item)}> 
              <Image 
                style={styles.starImageStyle} 
                source={ 
                  item <= defaultRating 
                    ? require('../../../../assets/depois.png') 
                    : require('../../../../assets/antes.png') 
                } 
              /> 
            </TouchableOpacity> 
          ); 
        })} 
      </View> 
    ); 
  }; 

    return(
      <ScrollView>
      <View>
      <ImageBackground style={styles.tudo}>
      <View>
        <Text style={styles.cabecalho}>Mojito</Text>
      </View>
        <View style={styles.foto}> 
          <Image style={styles.fotinha} source={require('../../../../assets/mojito.png')} ></Image>
        </View>


        <View> 
  <View style={styles.decor}>
    <Text style={styles.ingredientes}>Ingredientes</Text>
  </View>
              
 <Text style={styles.ingre}>
  • 1 1/2 oz Rum Branco {'\n'}
  • 1/2 Limão cortado em pedaços {'\n'}
  • 10 folhas de Hortelã {'\n'}
  • 1 1/2 colher de bar de Açúcar {'\n'}
  •Completar com Água com gás
 </Text>

        <View style={styles.decor}>
          <Text style={styles.ingredientes2}>Modo de preparo</Text>
        </View>
              <Text style={styles.preparo}>
1- Macere as folhas de hortelã com o limão e o açúcar em um copo Highball {'\n'}
2- Complete o copo com gelo e adicione o Rum {'\n'}
3- Complete com Água com gás e misture os ingredientes
          </Text>
</View>
          <View style={styles.decor2}>
            <Text style={styles.criador}>Receita de Drinquepedia</Text>
          </View>
        

        <View style={styles.video}>
          <YoutubePlayer
            height={500}
            width={'80%'}
            play={false}
            videoId={'cQiUiZpYgsA'}
          />
        </View>


  <View style={styles.container}> 
        <Text style={styles.textStyle}>Avalie a receita:</Text> 
        <Avaliacao/> 
        <Text style={styles.textStyle2}> 
          {defaultRating} / {Math.max.apply(null, maxRating)} 
        </Text> 
         
      </View> 

     
               
      </ImageBackground>
    </View>
 </ScrollView> 
 
   
        
    );

    
      
}

const styles = StyleSheet.create({
tudo:{
    backgroundColor: '#859497',
    width: '100%',
    height: '100%',
    display:'flex',
},
cabecalho:{
  color: '#000000',
  marginTop: 50,
  fontSize: 28,
  textAlign: 'center',
  margin: 2,
},

ingredientes:{
  fontSize: 24,
  color: '#ff9900',
  textAlign: 'center',
  marginTop: 30,
},
ingredientes2:{
  fontSize: 24,
   color: '#ff9900',
  textAlign: 'center',
  marginTop: 20,
},
decor:{
  borderBottomColor: '#000000',
  borderColor:'transparent',
  borderWidth: 1,
  marginLeft:20,
  marginRight:20,
},
decor2:{
  borderBottomColor: '#000000',
  borderColor:'transparent',
  borderWidth: 1,
  marginLeft:60,
  marginRight:60,
},

fotinha:{
  width:200,
  height:200,
  borderColor: '#000000',
  borderWidth: 2,
  
},
foto:{
  textAlign: 'center',
  alignItems: 'center',
  marginTop: 40,
},

video:{
  alignItems:'center',
  justifyContent: 'center',
  marginTop:30,
  marginBottom:-250,
},

ingre:{
  fontSize: 15,
  marginLeft: 20,
   marginTop: 15,
},
preparo:{
  fontSize: 15,
  marginLeft: 20,
  marginRight: 20,
  textAlign: 'justify',
  marginTop: 15,
},
criador:{
  marginTop:25,
  fontSize: 8,
  textAlign: 'center',
},
  container: { 
    backgroundColor: 'w#DAF2F8', 
    // padding: 10, 
    justifyContent: 'center', 
    textAlign: 'center', 
  }, 
  textStyle: { 
    textAlign: 'center', 
    fontSize: 19, 
    color: '#000', 
    marginTop: 15, 

  }, 
  textStyle2: { 
    textAlign: 'center', 
    fontSize: 19, 
    color: '#000', 
    marginTop: 25, 
    marginBottom: 25,

  }, 

 
  ratingBarStyle: { 
    justifyContent: 'center', 
    flexDirection: 'row', 
    marginTop: 30, 
  }, 
  starImageStyle: { 
    width: 40, 
    height: 40, 
    resizeMode: 'cover',
     marginRight: 4,
  },
});