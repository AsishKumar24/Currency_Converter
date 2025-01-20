import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native'; 
import type {PropsWithChildren} from 'react';
type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>


const CurrencyButton = (props: CurrencyButtonProps): JSX.Element =>
{
    return (
        <View style={design.buttonContainer}>
        <Text style={design.flag}>{props.flag}</Text> 
        <Text style={design.country}>{props.name}</Text>
    </View>
    )
}
const design = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 20,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
 })

export default CurrencyButton