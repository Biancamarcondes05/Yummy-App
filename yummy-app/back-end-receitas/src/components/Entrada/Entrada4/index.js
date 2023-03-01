import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Entrada4({navigation}) {
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
        <Text style={styles.cabecalho}>Polvo ao vinagrete</Text>
      </View>

        <View style={styles.foto}> 
          <Image style={styles.fotinha} source={require('../../../../assets/polvo-ao-vinagrete.jpeg')} ></Image>
        </View>

        <View style = {styles.dois}>
          <View style = {styles.tempo}> 
            <Image style={styles.relogio} source={require('../../../../assets/relogio.png')} ></Image>
              <Text>40 min</Text>
          </View>
          <View style = {styles.cozir}> 
            <Image style={styles.panela} source={require('../../../../assets/panela.png')} ></Image>
              <Text>6 porções</Text>
          </View>
          </View>

        <View> 
          <View style={styles.decor}>
            <Text style={styles.ingredientes}>Ingredientes</Text>
          </View>

 <Text style={styles.ingre}>
          • 1 polvo inteiro limpo (aproximadamente 1kg) {'\n'}
          • 1 cebola fatiada {'\n'}
          • 2 colheres (chá) de sal {'\n'}
          • 2 folhas de louro {'\n'}
          • 1/2 sachê de molho de tomate (340g) {'\n'}
          • 1 pimentão verde picado {'\n'}
          • 1 dente de alho amassado {'\n'}
          • 1 xícara (chá) de cheiro-verde picado{'\n'} 
          • Suco de 2 limões {'\n'}
          • 1/2 xícara (chá) de vinagre tinto {'\n'}
          • 1 xícara (chá) de azeite {'\n'}
          • 3 colheres (chá) de sal {'\n'}
</Text>
            <View style={styles.decor}>
              <Text style={styles.ingredientes2}>Modo de preparo</Text>
            </View>
              <Text style={styles.preparo}>
1- Corte o polvo em pedaços e coloque em uma panela de pressão com a cebola, o sal, o louro e o molho de tomate. Cozinhe em fogo baixo por 10 minutos após pegar pressão.{'\n'}
2-  Espere a pressão sair naturalmente e abra a panela. {'\n'}
3-Transfira para uma tigela e reserve na geladeira. {'\n'}
4-Para o vinagrete, misture em uma tigela os tomates, o pimentão, o alho, o cheiro-verde, o suco de limão, o vinagre, o azeite e o sal.{'\n'}
5- Adicione o polvo à mistura e mexa até os ingredientes incorporarem.{'\n'}
6- Leve à geladeira por 2 horas e sirva, se desejar, acompanhado de pão francês. 
  </Text>       
</View>
          <View style = {styles.decor2}>
            <Text style={styles.criador}> Receita por guia da cozinha</Text>
          </View>


        <View  style={styles.video}>
          <YoutubePlayer
            height={500}
            width={'80%'}
            play={false}
            videoId={'a7xFkWAklBQ'}
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