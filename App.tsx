import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Pressable
} from 'react-native';
//constants
import { currencyByRupee } from './constants';
//Component
import CurrencyButton from './components/CurrencyButton';
//snackbar for notifcation or alert
import Snackbar from 'react-native-snackbar';
function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [resultValue, setResultValue] = useState('');
  const buttonPressed = (targetValue : Currency) => 
  {
    //if there is no input value then return sncakbar alert kinda thing as the state of input value is defined as string
    if (!inputValue)
    {
      return Snackbar.show({
        text: "Enter a Value to convert ",
        backgroundColor: '#FF362E',
        textColor: '#000000'  
      })
    }
    //parsefloat is used to or makes it gurantee that the input value is a number
    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount))
    {
      const convertedValue = inputAmount * targetValue.value;
      setResultValue(`${convertedValue.toFixed(2)} ${targetValue.symbol}`); //to fixed is used fro upto how many decimal places that i need
      setTargetCurrency(targetValue.name);
    }
    else
    {
      return Snackbar.show({
        text: "Enter a Valid number to convert ",
        backgroundColor: '#F4BE2C',
        textColor: '#000000'
      })  
    }
  }
  return (
    //
    <>
      <StatusBar/>
      <View style = {design.container}>
        <View style={design.topContainer}>
         <View style={design.rupeesContainer}>
            <Text style={design.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue} //after entering the value here it will pass on to the buttonpressed component (this view contains only the rupee container items)
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter Amount in Ruppes"
            /> 
          </View> 
          {resultValue && (
            <Text style={design.resultTxt} >
              {resultValue}
            </Text>
          )}
        </View>
        <View style={design.bottomContainer}>
          <FlatList
            numColumns={1}
            data={currencyByRupee}
            //here the item is destructurised //() => () is a return keyword
            keyExtractor={item => item.name}
            renderItem={({item})=>(
              <Pressable
                style={
                        [design.button , targetCurrency === item.name && design.selected ]
                      }
                onPress={() => buttonPressed(item)}>
                <CurrencyButton {...item}/> 
            </Pressable>
            )}
          />
        </View>
      </View>
    </>
   
  );
} 

const design = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '#515151', // Dark background for the app
    },
    topContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: 16, // Add padding for better spacing
    },
    resultTxt: {
      fontSize: 32,
      color: '#FFFFFF', // White color for better visibility on dark background
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 16,
    },
    rupee: {
      marginRight: 8,
      fontSize: 22,
      color: '#FFFFFF', // White color for consistency with the dark background
      fontWeight: 'bold',
    },
    rupeesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#3E3E3E', // Slightly lighter background for contrast
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    inputAmountField: {
      height: 40,
      width: 200,
      padding: 8,
      borderWidth: 1,
      borderColor: '#FFFFFF', // White border for visibility
      borderRadius: 8,
      backgroundColor: '#FFFFFF', // Light background for input field
      color: '#000000', // Dark text for contrast in the input field
      fontSize: 16,
    },
    bottomContainer: {
      flex: 3,
      paddingHorizontal: 16,
      paddingTop: 16,
      backgroundColor: '#414141', // Slightly different tone for separation
    },
    button: {
      flex: 1,
      margin: 12,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      backgroundColor: '#FFFFFF', // Light color for button
      elevation: 2,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    selected: {
      backgroundColor: '#ffeaa7', // Highlight selected button with a soft yellow
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333333', // Dark text for visibility on light background
    }, 
});
export default App;
