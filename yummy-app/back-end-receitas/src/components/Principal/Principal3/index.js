import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Princiapal3({navigation}) {
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
        <Text style={styles.cabecalho}>Conchiglione de salmao</Text>
      </View>
        <View style={styles.foto}> 
          <Image style={styles.fotinha} source={require('../../../../assets/conglis.png')} ></Image>
        </View>

  <View style = {styles.dois}>
          <View style = {styles.tempo}> 
            <Image style={styles.relogio} source={require('../../../../assets/relogio.png')} ></Image>
              <Text>30 min</Text>
          </View>
          <View style = {styles.cozir}> 
            <Image style={styles.panela} source={require('../../../../assets/panela.png')} ></Image>
              <Text>4 porções</Text>
          </View>
          </View>

       
        <View> 
        <View style={styles.decor}>
          <Text style={styles.ingredientes}>Ingredientes</Text>
        </View>
              
 <Text style={styles.ingre}>
  • 300g de massa de conchiglione {'\n'}
  • 1/2 xícara (chá) de caldo de peixe  {'\n'}
  • 1/2 xícara (chá) de vinho branco seco  {'\n'}
  • 2 xícaras (chá) de salmão  {'\n'}
  • 1 tomate sem pele e sem sementes picado  {'\n'}
  • 1 colher (sopa) de suco de limão  {'\n'}
  • Sal a gosto  {'\n'}
  • 2 colheres (chá) de maisena  {'\n'}
  • 1 colher (sopa) de água  {'\n'}
  • 2 xícaras (chá) de creme de leite fresco
</Text>


  <View style={styles.decor}>
    <Text style={styles.ingredientes2}>Modo de preparo</Text>
  </View>
              <Text style={styles.preparo}>
          1- Cozinhe o macarrão conforme as instruções da embalagem, escorra e reserve. {'\n'}
2- Ferva o caldo de peixe no vinho branco. Abaixe o fogo, acrescente o salmão em cubos e cozinhe com a panela semitampada por 4 minutos, mexendo de vez em quando. Retire o salmão e reserve. {'\n'}
3- Na mesma panela, coloque o tomate, o suco de limão, sal e cozinhe por mais 3 minutos. Junte a maisena dissolvida na água, mexendo até engrossar. {'\n'}
4-Junte o salmão e deixe no fogo por poucos segundos. Retire do fogo, acrescente o creme de leite e reserve. {'\n'}
5- Recheie os conchigliones com o salmão e sirva em seguida.
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
            videoId={'FumwTNRUa2w'}
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