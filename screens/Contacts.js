import React, { useEffect } from 'react';
import { Text } from 'react-native';

const Contacts = ({navigation,route}) => {
  useEffect(()=>{
    navigation.setOptions({
      title:route.params.name.toUpperCase()
    })
  },[])
  return (
    <Text>Contacts</Text>
  )
}

export default Contacts