import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Princiapal1({ navigation }) {
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
            <Text style={styles.cabecalho}>Moqueca de peixe com frutos do mar</Text>
          </View>
          <View style={styles.foto}>
            <Image
              style={styles.fotinha}
              source={require('../../../../assets/moqueca.png')}></Image>
          </View>
          <View style={styles.dois}>
            <View style={styles.tempo}>
              <Image
                style={styles.relogio}
                source={require('../../../../assets/relogio.png')}></Image>
              <Text>45 min</Text>
            </View>
            <View style={styles.cozir}>
              <Image
                style={styles.panela}
                source={require('../../../../assets/panela.png')}></Image>
              <Text>6 porções</Text>
            </View>
          </View>

          <View>
            <View style={styles.decor}>
              <Text style={styles.ingredientes}>Ingredientes</Text>
            </View>
            <Text style={styles.ingre}>
              • 1kg de postas de namorado ou cação {'\n'}• 500g de lula em anéis{' '}
              {'\n'}• 500g de camarão médio limpo {'\n'}• Suco de 1 limão {'\n'}
              • 3 colheres (sopa) de cheiro-verde picado {'\n'}• 2 dentes de
              alho amassados {'\n'}• 4 colheres (sopa) de azeite {'\n'}• Sal a
              gosto {'\n'}• Molho de pimenta vermelha a gosto {'\n'}• 1 pimentão
              verde fatiado {'\n'}• 1 pimentão amarelo fatiado {'\n'}• 1
              pimentão vermelho fatiado {'\n'}• 2 tomates fatiados {'\n'}• 2
              cebolas fatiadas {'\n'}• 1 garrafa de leite de coco (200 ml){' '}
              {'\n'}• 2 colheres (sopa) de azeite de dendê {'\n'}• 5 colheres
              (sopa) de coentro picado {'\n'}
            </Text>

            <View style={styles.decor}>
              <Text style={styles.ingredientes2}>Modo de preparo</Text>
            </View>
            <Text style={styles.preparo}>
              1- Tempere o peixe e os frutos do mar com o suco, o cheiro-verde,
              o alho, o azeite, sal e molho de pimenta. {'\n'}
              2- Em uma panela de barro grande, intercale camadas de peixes e
              frutos do mar com os legumes polvilhados com sal. Regue tudo com o
              leite de coco e o dendê. {'\n'}
              3- Tampe e cozinhe em fogo médio por 10 minutos depois de iniciada
              a fervura. Desligue e deixe descansar por 10 minutos. {'\n'}
              4-Polvilhe com o coentro e sirva.
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
              videoId={'RH0FH_S6Pds'}
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
  ingredientes2: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    marginTop: 20,
  },

  fotinha: {
    width: 200,
    height: 200,
    borderColor: '#ff9900',
    borderWidth: 2,
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
    marginBottom:-250,
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
