import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

export default function Entrada1({ navigation }) {
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

  return (
    <ScrollView>
      <View>
        <ImageBackground style={styles.tudo}>
          <View>
            <Text style={styles.cabecalho}>Coquetel de Camarão</Text>
          </View>

          <View style={styles.foto}>
            <Image
              style={styles.fotinha}
              source={require('../../../../assets/coquetel-de-camarao.jpg')}></Image>
          </View>

          <View style={styles.dois}>
            <View style={styles.tempo}>
              <Image
                style={styles.relogio}
                source={require('../../../../assets/relogio.png')}></Image>
              <Text>30 min</Text>
            </View>
            <View style={styles.cozir}>
              <Image
                style={styles.panela}
                source={require('../../../../assets/panela.png')}></Image>
              <Text>4 porções</Text>
            </View>
          </View>

          <View>
            <View style={styles.decor}>
              <Text style={styles.ingredientes}>Ingredientes</Text>
            </View>

            <Text style={styles.ingre}>
              • 1 e 1/2 xícara de chá de água{'\n'}• 2 colheres de chá́ de sal
              {'\n'}• 12 camarões grandes limpos {'\n'}• 400 ml de iogurte sem
              lactose {'\n'}• 1 colher de sobremesa de molho inglês{'\n'}• 1
              colher de sobremesa de mostarda D’jon{'\n'}• 1/2 colher de
              sobremesa de catchup {'\n'}• 2 colheres de sopa de conhaque {'\n'}
              • 2 rodelas de abacaxi {'\n'}• Páprica picante a gosto {'\n'}
            </Text>

            <View style={styles.decor}>
              <Text style={styles.ingredientes2}>Modo de preparo</Text>
            </View>
            <Text style={styles.preparo}>
              1- Em uma panela, coloque a água com o sal e deixe ferver. {'\n'}
              2- Em seguida, adicione os camarões e deixe cozinhar por dez
              minutos. {'\n'}
              3- Retire os camarões e escorra bem. Reserve. {'\n'}
              4- Em uma tigela, misture o iogurte com o molho inglês, a
              mostarda, o catchup, o conhaque, os abacaxis picados em cubos e
              uma pitada de sal. {'\n'}
              5- Coloque essa mistura em tacinhas de sobremesa e decore com os
              camarões ao redor. {'\n'}
              6- Para finalizar, polvilhe páprica picante por cima.
            </Text>
          </View>
          <View style={styles.decor2}>
            <Text style={styles.criador}>Receita de Jocookings</Text>
          </View>

          <View style={styles.video}>
            <YoutubePlayer
              height={500}
              width={'80%'}
              play={false}
              videoId={'WWHxP5sPzUQ'}
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
  tudo: {
    backgroundColor: '#859497',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  cabecalho: {
    color: '#000000',
    marginTop: 50,
    fontSize: 28,
    textAlign: 'center',
    margin: 2,
  },

  ingredientes: {
    fontSize: 24,
    color: '#ff9900',
    textAlign: 'center',
    marginTop: 30,
  },
  ingredientes2: {
    fontSize: 24,
    color: '#ff9900',
    textAlign: 'center',
    marginTop: 20,
  },

  fotinha: {
    width: 200,
    height: 200,
    borderColor: '#000000',
    borderWidth: 2,
  },
  decor: {
    borderBottomColor: '#000000',
    borderColor: 'transparent',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  decor2: {
    borderBottomColor: '#000000',
    borderColor: 'transparent',
    borderWidth: 1,
    marginLeft: 60,
    marginRight: 60,
  },
  foto: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  dois: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  video: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: -250,
  },
  tempo: {
    background: 'transparent',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 40,
    borderBottomColor: '#ff9900',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  cozir: {
    background: 'transparent',
    textAlign: 'center',
    alignItems: 'center',
    borderBottom: 1,
    marginRight: 40,
    borderBottomColor: '#ff9900',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  panela: {
    width: 30,
    height: 30,
  },
  relogio: {
    width: 30,
    height: 30,
  },
  ingre: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 15,
  },
  preparo: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    marginTop: 15,
  },
  criador: {
    marginTop: 25,
    fontSize: 8,
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'w#DAF2F8',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: -15,
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
