import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Product({product}){

    if(product === null) { return null }
    
    const scores = {
        green: 'green',
        lightgreen: '#85BB2F',
        yellow: '#FFD300',
        orange: 'orange',
        red: 'red',
      }
    
  const getColorFromScore = (score) => {
    switch (score) {
      case ('a'):
        return scores.green
      case ('b'):
        return scores.lightgreen
      case ('c'):
        return scores.yellow
      case ('d'):
        return scores.orange
      case ('e'):
        return scores.red
      default:
        return 'grey'
    }
  }
  

    return (
        <View style={{flex: 1}}>
            <Text style={[{fontSize: 24},  {color: getColorFromScore(product.nutrition_grades)}]}>{product.generic_name}</Text>
            <Image
                style={styles.logo}
                source={{
                uri: product.image_front_url,
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
      width: 250,
      height: 250,
    },
  });