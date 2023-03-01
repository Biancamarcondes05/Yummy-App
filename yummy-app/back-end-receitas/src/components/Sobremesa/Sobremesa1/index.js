import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Sobremesa1({navigation}) {
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
        <Text style={styles.cabecalho}>Sobremesa tropical</Text>
      </View>
        <View style={styles.foto}> 
          <Image style={styles.fotinha} source={require('../../../../assets/tropical.jpg')} ></Image>
        </View>

       <View style={styles.dois}>
          <View style={styles.tempo}> 
            <Image style={styles.relogio} source={require('../../../../assets/relogio.png')} ></Image>
              <Text>60 min</Text>
          </View>
          <View style={styles.cozir}> 
            <Image style={styles.panela} source={require('../../../../assets/panela.png')} ></Image>
              <Text>1 unidade</Text>
          </View>
          </View>


        <View> 
          <View style={styles.decor}>
            <Text style={styles.ingredientes}>Ingredientes</Text>
          </View>
              
 <Text style={styles.ingre}>
Creme branco: {'\n'}
  • 400 ml de leite {'\n'}
  • 1 colher de sopa de Amido de Milho Maizena {'\n'}
  • 1 lata de leite condensado {'\n'}
  • 1 gema {'\n'}
  • 1 caixa de creme de leite {'\n'}
  • 1 colher de chá de essência de baunilha {'\n'}
Recheio:{'\n'}
  • 1 xícara de chá de kiwi cortado em cubos {'\n'}
  • 1 xícara de chá de uvas roxas sem semente cortadas ao meio {'\n'}
  • 1 xícara de chá de manga cortada em cubos {'\n'}
  • 200 gramas de suspiro {'\n'}
Calda de chocolate:{'\n'} 
  • 250 ml de leite {'\n'}
  • 250 ml de creme de leite{'\n'} 
  • 1 xícara de chá de chocolate em pó {'\n'}
  • 1/2 xícara de chá de açúcar {'\n'}
  • 100 gramas de margarina
</Text>
 

    <View style={styles.decor}>
      <Text style={styles.ingredientes2}>Modo de preparo</Text>
    </View>
    <Text style={styles.preparo}>
Creme branco: {'\n'}
1- Em uma panela adicione o leite, o amido de milho Maizena, o leite condensado, a gema, o creme de leite e a essência de baunilha. {'\n'}
2- Misture e leve ao fogo médio, mexendo sem parar até engrossar levemente. Reserve para esfriar. {'\n'}
Calda de chocolate: {'\n'} 
1- Misture todos os ingredientes e leve ao fogo até engrossar um pouco. {'\n'}
Montagem: {'\n'}
1- Comece pelas frutas picadas, depois o suspiro quebrado com as mãos em pedaços menores, calda de chocolate e creme branco. {'\n'}
2- Repita a sequência. Decore com o creme branco, o suspiro quebrado em pedaços menores e calda de chocolate.
          </Text>
 </View>
          <View style={styles.decor2}>
            <Text style={styles.criador}>Receita de Recepedia</Text>
          </View>
       

        <View style={styles.video}>
          <YoutubePlayer
           height={500}
            width={'80%'}
            play={false}
            videoId={'GzUz-eE9i5M'}
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