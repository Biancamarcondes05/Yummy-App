import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Entrada2({navigation}) {
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
        <Text style={styles.cabecalho}>Canapé de ricota com azeitona</Text>
</View>
        <View style={styles.foto}> 
          <Image  style={styles.fotinha} source={require('../../../../assets/canapeee.jpg')} ></Image>
        </View>

      <View style = {styles.dois}>
          <View style = {styles.tempo}> 
            <Image style={styles.relogio} source={require('../../../../assets/relogio.png')} ></Image>
              <Text>35 min</Text>
          </View>
          <View style = {styles.cozir}> 
            <Image style={styles.panela} source={require('../../../../assets/panela.png')} ></Image>
              <Text>8 unidades</Text>
          </View>
          </View>
          
          <View>
        <View style = {styles.decor}>
        <Text style={styles.ingredientes}>Ingredientes</Text>
        </View>
       
         <Text style={styles.ingre}>
           
            Ingredientes da cestinha: {'\n'} 
            • 250 gramas de farinha de trigo⁣ {'\n'} 
            • 100 gramas de margarina⁣ {'\n'} 
            • 1 pitada de sal⁣ {'\n'} 
            • 50 ml de água gelada {'\n'} 
            Ingredientes do patê: {'\n'} 
            • 300 gramas de ricota⁣ {'\n'} 
            • 160 gramas de azeitona sem caroço ⁣ {'\n'} 
            • Azeite a gosto⁣ {'\n'} 
            • Pimenta-do-reino a gosto⁣ {'\n'} 
</Text>
 <View style = {styles.decor}>
  <Text style={styles.ingredientes2}>Modo de preparo</Text>
 </View>
              <Text style={styles.preparo}>
            Preparo da cestinha: {'\n'}

            1- Misture a farinha, a margarina e o sal. {'\n'}

            2- Adicione água aos poucos até ficar macio e com boa consistência.{'\n'} 

            3- Cubra e leve para geladeira por 1 hora.{'\n'} 

            4- Abra com um rolo e corte círculos. {'\n'}

            5- Molde em forminhas de canapé. {'\n'}

            6- Asse por 14 minutos a 200 °C. Deixe esfriar. {'\n'}
{'\n'}
            Preparo do patê e montagem:{'\n'}

            1- Misture todos os ingredientes no processador e adicione o azeite gradualmente. O ponto ideal é uma pasta homogênea. {'\n'}

            2- Coloque em um bico de confeitar e coloque sobre as cestinhas. {'\n'}

            3- Agora é só servir! Bom apetite.
          </Text>
</View>
          <View style = {styles.decor2}>
            <Text style={styles.criador}> receita de Laurinhafaz</Text>   
          </View>
      

        <View style={styles.video}>
          <YoutubePlayer
            height={500}
            width={'80%'}
            play={false}
            videoId={'Bhfa2Pp4KOg'}
          />
        </View>

        
      <View style={styles.container}> 
        <Text style={styles.textStyle}>Avalie a receita:</Text> 
        <Avaliacao /> 
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
  textAlign: 'center',
  marginTop: 30,
},
ingredientes2:{
  fontSize: 24,
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
dois:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 25,
},

video:{
  alignItems:'center',
  justifyContent: 'center',
  marginTop:40,
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
  marginTop:15,
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