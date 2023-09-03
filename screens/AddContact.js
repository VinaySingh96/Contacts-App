import React from 'react';
import {Text,View, TextInput ,StyleSheet,SafeAreaView,Dimensions,Vibration} from 'react-native';
import Color from '../Constants/Color';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenDimension = Dimensions.get('screen');

const AddContact = ({navigation}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [name, onChangeName] = React.useState('');
  const [phone, onChangePhone] = React.useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
        placeholderTextColor={Color.dark2.c1}
        keyboardType='default'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePhone}
        value={phone}
        placeholder="Phone"
        placeholderTextColor={Color.dark2.c1}
        keyboardType='phone-pad'
      />
      <View style={styles.container}>

        <TouchableOpacity
        onPress={()=>{
          Vibration.vibrate(100);
          navigation.navigate('Home')
        }}
        >
        <View style={styles.button}>
          <Text style={{color:Color.neon2.c3,fontSize:17,fontWeight:'bold'}}>Cancel</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>Vibration.vibrate(100)}
        >
        <View style={styles.button}>
          <Text style={{color:Color.light.c1,fontSize:17,fontWeight:'bold'}}>Save</Text>
        </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize:20,
    height: 60,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius:10,
    color:Color.dark.c2
  },
  container:{
    margin:20,
    padding:10,
    height:50,
    width:screenDimension.width/1.2,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  button:{
    margin:5,
    padding:5,
    height:40,
    width:100,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey'
  }
});

export default AddContact;