import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Entrada5({navigation}) {
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
      <ImageBackground style = {styles.tudo}>
      <View>
        <Text style={styles.cabecalho}>Tartar de atum</Text>
      </View>

        <View style={styles.foto}> 
          <Image style={styles.fotinha} source={require('../../../../assets/tartar.png')} ></Image>
        </View>

 <View style={styles.dois}>
          <View style={styles.tempo}> 
            <Image style={styles.relogio} source={require('../../../../assets/relogio.png')} ></Image>
              <Text>20 min</Text>
          </View>
          <View style = {styles.cozir}> 
            <Image style={styles.panela} source={require('../../../../assets/panela.png')} ></Image>
              <Text>1 porção</Text>
          </View>
          </View>

        <View> 
        

        <View style = {styles.decor}>
          <Text style={styles.ingredientes}>Ingredientes</Text>
        </View>
  <Text style={styles.ingre}>
    • 200 g de atum fresco, em cubinhos {'\n'}
    • 1 tomate Débora verde (120 g), em cubinhos{'\n'}  
    • 1  2/3 colher (sopa) (10 g) de raspas da casca de limão-siciliano {'\n'}
    • 4 colheres (sopa) (60 ml) de suco de limão-siciliano {'\n'}
    • 1 colher (sopa) (3 g) de coentro picado finamente {'\n'}
    • 1 colher (sopa) (4 g) de cebolinha picada finamente {'\n'}
    • 1/3 de xícara (80 ml) de azeite de oliva {'\n'}
    • Sal e pimenta-do-reino branca moída na hora a gosto {'\n'}
</Text>
 
 <View style={styles.decor}>
  <Text style={styles.ingredientes2}>Modo de preparo</Text>
 </View>
    <Text style={styles.preparo}>
      1- Numa tigela, misture o atum, o tomate, as raspas e o suco de limão, o coentro e a cebolinha, regue com o azeite e tempere sal e pimenta. {'\n'}
2- Se preferir, sirva com um gazpacho. 
          </Text>
 </View>
          <View style={styles.decor2}>
            <Text style={styles.criador}>Receita de Renata Braune</Text>
          </View>

       

        <View style={styles.video}>
          <YoutubePlayer
            height={500}
            width={'80%'}
            play={false}
            videoId={'8_aCEeKVICc'}
          />
        </View>

      <View style={styles.container}> 
        <Text style={styles.textStyle}> 
          Avalie a receita: 
        </Text> 
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
dois:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 25,
},

video:{
  alignItems:'center',
  justifyContent: 'center',
  marginTop:30,
  marginBottom: -250,
},
tempo:{
  background: 'transparent',
  textAlign: 'center',
  alignItems: 'center',
  marginLeft: 40,
  borderBottomColor: '#ff9900',
  borderColor:'transparent',
  borderWidth: 1,
},
cozir:{
  background: 'transparent',
  textAlign: 'center',
  alignItems: 'center',
  borderBottom: 1,
  marginRight: 40,
  borderBottomColor: '#ff9900',
  borderColor:'transparent',
  borderWidth: 1,
},
panela:{
  width: 30,
  height: 30,
},
relogio:{
  width: 30,
  height: 30,
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