import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Entrada3({navigation}) {
  
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
      <ImageBackground style ={styles.tudo}>
      <View>

        <View >
          <Text style={styles.cabecalho}>Dadinhos de Tapioca</Text>
        </View>

        <View style={styles.foto}> 
          <Image style={styles.fotinha} source={require('../../../../assets/dadinhos-de-tapioca.jpeg')} ></Image>
        </View>

 <View style = {styles.dois}>
          <View style = {styles.tempo}> 
            <Image style={styles.relogio} source={require('../../../../assets/relogio.png')} ></Image>
              <Text>15 min</Text>
          </View>
          <View style = {styles.cozir}> 
            <Image style={styles.panela} source={require('../../../../assets/panela.png')} ></Image>
              <Text>48 uni</Text>
          </View>
          </View>

        <View> 
          <View style = {styles.decor}><Text style={styles.ingredientes}> Ingredientes </Text></View>
          <Text style={styles.ingre}>
          • 250 gramas de tapioca granulada {'\n'}
          • 375 gramas de queijo coalho {'\n'}
          • 500 ml de leite integral {'\n'}
          • Sal, pimenta do reino, orégano a gosto {'\n'}
          • Óleo o quanto baste para fritar por imersão {'\n'}
</Text>
        <View style = {styles.decor}>
          <Text style={styles.ingredientes2}>Modo de preparo</Text>
          </View>
<Text style={styles.preparo}>
          1- Reúna todos os ingredientes; {'\n'}
          2- Com um ralador, rale o queijo coalho finamente e reserve em um recipiente; {'\n'}
          3- Em uma panela, ferva bem o leite, em fogo médio. Quando ele chegar ao ponto de subir espuma, desligue o fogo; {'\n'}
          4- Na tigela com o queijo, acrescente a tapioca. Tempere com sal, pimenta e orégano e misture bem para a massa pegar o sabor; {'\n'}
         5- Adicione o leite fervente na mistura e mexa sem parar, com o auxílio de um fouet, até incorporar, por cerca de 3 minutos; {'\n'}
         6- Despeje a mistura na forma de 20 x 25 cm forrada com filme plástico sobrando nas bordas. Deixe descansar por uns 10 minutos. DICA: A forma precisa ser       pequena, com cerca de 2 dedos de altura. {'\n'}Cubra a forma com o filme e leve para a geladeira por 2 horas para firmar; {'\n'}
        7-  Retire as aparas do bloco de tapioca e faça cortes verticais com pedaços de espessura de 2 dedos. Corte os bastonetes em cubos; {'\n'}
         8- Em uma panela ou frigideira com bastante óleo quente, deixe os dadinhos mergulhados até dourar, sem mexer. Retire com uma espátula e coloque-os sobre um prato coberto com papel toalha; {'\n'}
        9-  Sirva com o molho de sua preferência. 
          </Text>
</View>
        <View style = {styles.decor2}>
          <Text style={styles.criador}>Feito por Tudo Gostoso</Text>
        </View> 

       
        

        <View style={styles.video}>
          <YoutubePlayer
            height={500}
            width={'80%'}
            play={false}
            videoId={'wwcc7Jv2bGc'}
          />
        </View>

 <View style={styles.container}> 
        <Text style={styles.textStyle}>Avalie a receita:</Text> 
        <Avaliacao/> 
        <Text style={styles.textStyle2}> 
          {defaultRating} / {Math.max.apply(null, maxRating)} 
        </Text> 
         
      </View> 

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
  marginBottom:-250,
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