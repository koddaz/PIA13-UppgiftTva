import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {

  const [countingNumber, setCountingNumber] = useState(0)

  function addNumber() {
    if(countingNumber >= 10) {
      setCountingNumber(0)
    } else {
      setCountingNumber(countingNumber + 1)
    }
  }

  function removeNumber() {
    if(countingNumber <= 0) {
      setCountingNumber(0)
    } else {
    setCountingNumber(countingNumber - 1)}
  }

  function resetNumber() {
    setCountingNumber(0)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{flex: 0.1}}></View>
       <View style={{
        flex: 0.2,
        padding: 10,
        flexDirection: 'row'
       }}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1, borderWidth: 3, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}><Text style={{

          fontSize: 50,
          color: 'white'
         }}>{countingNumber}</Text></View>
        <View style={{flex: 1}}></View>
         

       </View>
       <View
       style={{
        flex: 0.8,
        flexDirection: 'row'
       }}>
        <View>
        <Button title="PLUS" onPress={addNumber}></Button>
        
        </View>
        <View style={{padding: 10}}></View>
        <View><Button title="MINUS" onPress={removeNumber}></Button></View>
       </View>

       <View
       style={{
        flex: 0.1
       }}>
        {countingNumber != 0 && 
        <Button title="RESET" onPress={resetNumber}></Button>
      } 
       </View>

    </View>
  );
}
