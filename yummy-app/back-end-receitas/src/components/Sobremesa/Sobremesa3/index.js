import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Sobremesa3({navigation}) {
  
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
        <Text style={styles.cabecalho}>Torta gelada de Bis</Text>
      </View>

        <View style={styles.foto}> 
          <Image style={styles.fotinha}source={require('../../../../assets/bis.png')} ></Image>
        </View>

  <View style={styles.dois}>
          <View style={styles.tempo}> 
            <Image style={styles.relogio} source={require('../../../../assets/relogio.png')} ></Image>
              <Text>180 min</Text>
          </View>
          <View style={styles.cozir}> 
            <Image style={styles.panela} source={require('../../../../assets/panela.png')} ></Image>
              <Text>10 porções</Text>
          </View>
          </View>


        <View> 
        <View style={styles.decor}>
          <Text style={styles.ingredientes}>Ingredientes</Text>
        </View>
              
 <Text style={styles.ingre}>
MASSA: {'\n'}
2 caixas de chocolate Bis {'\n'}
½ colher (sopa) de margarina {'\n'}
CREME: {'\n'}
• 1 e ½ latas (medida de lata) de leite {'\n'}
• 2 colheres (sopa) de amido de milho {'\n'}
• 1 lata de leite condensado {'\n'}
• 1 gema {'\n'}
• 1 colher (sopa) de manteiga {'\n'}
MOUSSE: {'\n'}
• 200 g de chocolate meio amargo picado {'\n'}
• 1 lata de creme de leite {'\n'}
• 2 claras em neve {'\n'}
• 3 colheres (sopa) de açúcar
 </Text>

          <View style={styles.decor}>
            <Text style={styles.ingredientes2}>Modo de preparo</Text>
          </View>
              <Text style={styles.preparo}>
MASSA: {'\n'}
No processador, triture todas as unidades de uma caixa de bis e a manteiga até formar uma pasta.{'\n'} 
Com a pasta, forre o fundo de uma fôrma de aro removível com 22cm de diâmetro. Reserve. {'\n'}
CREME: {'\n'}
Em uma panela, misture o leite e o amido, acrescente o leite condensado, a gema e a manteiga. Leve ao fogo mexendo até engrossar. Deixe esfriar e coloque sobre a pasta de bis reservada. {'\n'}
MOUSSE: {'\n'}
Derreta o chocolate em banho-maria, acrescente o creme de leite e misture. Reserve. Bata as claras em neve, junte o açúcar e bata mais. Misture as claras batidas ao chocolate reservado. Por cima do creme branco distribua o restante de bis picado e coloque a mousse por cima. {'\n'}
Leve ao freezer por 2 horas. {'\n'}
Conserve na geladeira até servir. Decore com bis. 
          </Text>
</View>
        <View style={styles.decor2}>
          <Text style={styles.criador}>Receita de Tudo Gostoso</Text>
        </View>
        

        <View style={styles.video}>
          <YoutubePlayer
            height={500}
            width={'80%'}
            play={false}
            videoId={'wPS0IGlJeaU'}
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