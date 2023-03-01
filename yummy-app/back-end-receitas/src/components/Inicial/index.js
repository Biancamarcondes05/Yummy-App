import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Inicial({navigation}) {
    const [inputValue, setInputValue] = useState('');
    return (
        <ImageBackground style={styles.tudo}>

            <View style={styles.desce}>
                <ImageBackground source={require('../../../assets/primeiro.png')} style={styles.img}></ImageBackground>
            </View>

            <View>
                <ImageBackground source={require('../../../assets/titulo.png')} style={styles.img2}></ImageBackground>
            </View>


            <View style={styles.fixToText}>

                <TouchableOpacity
                    style={styles.botao}
                    title="Categoria"
                    value={inputValue}
                    onChangeText={(value) => setInputValue(value)}
                    onPress={ () => navigation.navigate('Categorias')}
                >
                                        <Text style={styles.entrar}> ENTRAR </Text>


                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
 
 tudo:{
    backgroundColor: '#859497',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
 },
  desce: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:-45,
  },

  img: {
    width: 150,
    height: 150,
    marginBottom:-55,
  },

  img2: {
    width: 450,
    height: 450,
    marginBottom:-160,
  },


  botao: {
    
    backgroundColor: 'transparent',
    margin: 4,
    borderWidth: 3,
    borderColor: '#FF9900',
    borderRadius: 100,
    width: 185,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:60,
  },

  entrar: {
    color: '#ff9900',
    fontSize: 23,
  },

  fixToText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },

});