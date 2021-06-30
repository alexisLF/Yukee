import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ProductItem(props){

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
        <TouchableOpacity onPress={() => props.onItemClick(props.item)} style={productStyle.container}>
            <Text style={[productStyle.productTitle,  {color: getColorFromScore(props.item.nutrition_grades)}]}>{props.item.generic_name}</Text>
            <Text style={productStyle.productDate}>Scanné hier à 18h</Text>
        </TouchableOpacity>
    )
}


const productStyle = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        marginHorizontal: 30,
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    productTitle: {
      fontSize: 26,
      fontWeight: 'bold'
    },
    productDate: {
      fontSize: 20,
    }
  })
  