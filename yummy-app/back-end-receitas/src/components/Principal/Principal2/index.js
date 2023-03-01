import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Principal2({navigation}) {
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
        <Text  style={styles.cabecalho}>Risoto de frutos do mar</Text>
      </View>
        <View style={styles.foto}> 
          <Image style={styles.fotinha} source={require('../../../../assets/risoto.png')} ></Image>
        </View>

        <View style={styles.dois}>
          <View style={styles.tempo}> 
            <Image style={styles.relogio} source={require('../../../../assets/relogio.png')} ></Image>
              <Text>40 min</Text>
          </View>
          <View style={styles.cozir}> 
            <Image style={styles.panela} source={require('../../../../assets/panela.png')} ></Image>
              <Text>2 unid</Text>
          </View>
          </View>

        <View> 
         <View style = {styles.decor}>
          <Text style={styles.ingredientes}>Ingredientes</Text>
         </View>

            
 <Text style={styles.ingre}>
  • 1 xícara (chá) de arroz {'\n'}
  • 1 dente de alho amassado {'\n'}
  • 3 xícaras (chá) de água {'\n'}
  • 1 xícara (chá) de camarões médios {'\n'} 
  • 1/2 xícara (chá) de lula cortada em cubos {'\n'} 
  • 1 xícara (chá) de filé peixe cortado em cubos {'\n'}
  • 1 cebola média picada {'\n'}
  • 2 tomates grandes picados {'\n'}
  • 1/4 de xícara (chá) de salsa picada{'\n'} 
  • Sal a gosto {'\n'}
  • 2 colheres (sopa) de margarina{'\n'} 
</Text>


             <View style={styles.decor}>
              <Text style={styles.ingredientes2}>Modo de preparo</Text>
            </View>
              <Text style={styles.preparo}>
           1- Em uma panela, coloque a metade da margarina, leve ao fogo médio e doure o alho. Adicione a cebola, o tomate e refogue. {'\n'}
           2- Junte o peixe, a lula, o camarão e o sal, adicionando 1 xícara (chá) da água para cozinhar por aproximadamente 10 minutos. {'\n'}
           3- Em outra panela em fogo médio, refogue o arroz no restante da margarina por 3 minutos, adicione o restante da água e o sal a gosto e cozinhe por alguns minutos, até o arroz amaciar, misture os frutos do mar já preparados. {'\n'}
           4- Salpique a salsa, abaixe o fogo e cozinhe por mais 5 minutos até secar a água por completo. Sirva. 
          </Text>
</View>
        <View style={styles.decor2}>
          <Text style={styles.criador}>Receita de Guia da Cozinha</Text>
        </View>

          <View style={styles.video}>
          <YoutubePlayer
           height={500}
            width={'80%'}
            play={false}
            videoId={'ESjiIy9T_Vk'}
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