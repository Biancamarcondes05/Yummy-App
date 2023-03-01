import React,{useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Principal4({navigation}) {
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
        <Text style={styles.cabecalho}>Linguine de frutos do mar</Text>
      </View>
        <View style={styles.foto}> 
          <Image style={styles.fotinha} source={require('../../../../assets/linguine.png')} ></Image>
        </View>

<View style={styles.dois}>
          <View style = {styles.tempo}> 
            <Image style={styles.relogio} source={require('../../../../assets/relogio.png')} ></Image>
              <Text>25 min</Text>
          </View>
          <View style={styles.cozir}> 
            <Image style={styles.panela} source={require('../../../../assets/panela.png')} ></Image>
              <Text>2 porções</Text>
          </View>
          </View>

       <View> 
        <View style={styles.decor}>
          <Text style={styles.ingredientes}>Ingredientes</Text>
        </View>
              
 <Text style={styles.ingre}>
  • 1 pacote de macarrão tipo linguine {'\n'}
  • 80g de camarões limpos {'\n'}
  • 80g de almêijoas (ou vôngoles){'\n'} 
  • salsinha a gosto {'\n'}
  • 3 dentes de alho {'\n'}
  • 100g de tomates cereja {'\n'}
  • sal a gosto {'\n'}
  • pimenta do reino branca a gosto {'\n'}
  • azeite {'\n'}
  • manteiga {'\n'}
  • folhas de manjericão {'\n'}
  • queijo parmesão para finalizar {'\n'}
</Text>


           
            <View style={styles.decor}>
              <Text style={styles.ingredientes2}>Modo de preparo</Text>
            </View>
              <Text style={styles.preparo}>
           1- Aqueça uma frigideira com um fio de azeite e coloque os camarões limpos para saltear dos dois lados com sal e pimenta do reino branca a gosto.  {'\n'}
2- Assim que os camarões estiverem dourados e crocantes por fora, retire e reserve.  {'\n'}
3- Na mesma panela, acrescente mais um fio de azeite e coloque as amêijoas com um pouco de sal e limão.  {'\n'}
4- Assim que as amêijoas estiverem abertas, acrescente a salsinha e reserve.  {'\n'}
5- Quando o linguine estiver quase cozido em água e sal, regue novamente a frigideira com azeite e manteiga, acrescente o alho bem picado e tomates cerejas cortados ao meio com manjericão.  {'\n'}
6- Refogue levemente, acrescente o camarão e as amêijoas e, por último, a massa do linguine, salteando novamente. {'\n'}
7- Para a montagem, disponha a massa no centro do prato e finalize com folhas de manjericão e parmesão ralado. 
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
            videoId={'YL_raj3U7d8'}
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