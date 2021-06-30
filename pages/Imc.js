import React, { useState } from 'react';
import {View, Button, TextInput} from 'react-native'

export default function IMC(props){

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    var rgx = new RegExp('^\d{2,3}');

    
    function checkHeight(str)
    {
        var re = /^\d{2,3}/;
        return re.test(str);
    }

    function checkWeight(str)
    {
        var re = /^\d{2,3}/;
        return re.test(str);
    }

    function checkAndShow(){
        if(!checkHeight(height)){
            alert('Veuillez entrer une taille correcte')
        } else if(!checkWeight(weight)){
            alert('Veuillez entrer un poids convenable')
        } else {
            alert('Votre IMC est :' + Math.sqrt(height)/weight)
        }
    }

    return(
        <View style={{flex: 1}}>

            <TextInput
                value={height}
                onChangeText={(str) => setHeight(str)}

                placeholder="Votre taille en cm"
                keyboardType="numeric"
            />

            <TextInput
                value={weight}
                onChangeText={(str) => setWeight(str)}

                keyboardType="numeric"
                placeholder="Votre poids en kg"
            />

            <Button
                title="Calculer IMC"
                disabled={(height === '' || weight === '')}
                onPress={checkAndShow}
            />

        </View>
    )
}