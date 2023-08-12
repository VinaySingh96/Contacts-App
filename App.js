/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [allContact, setallContact] = useState([]);
  useEffect(()=>{
    Contacts.getAll().then((contacts) => {
      setallContact(contacts);
      console.log(allContact.length)
    }).catch((e) => {
      console.log(e)
    })
  },[])

  // },[])


  const onClick = async () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app view wants your contacts',
        'buttonPositive': 'Please Accept'
      }
    ).then(() => {
      Contacts.getAll().then((contacts) => {
        // contacts.forEach(e=>{
        //   setallContact(e);
        //   console.log(e);

        // })
        setallContact(contacts);
        console.log(allContact.length)
      }).catch((e) => {
        console.log(e)
      })
    })
  }
  return (
    <View>
      <ScrollView >
        <Text style={{}}>
          My Contacts
        </Text>
        {/* <Button title='contacts fetch' onPress={onClick} /> */}
          {/* <Text>{allContact[0].givenName}</Text> */}
          <Text>{allContact.length}</Text>
        <View>
          {allContact.map((e,index) => {
            // console.log(e.phoneNumbers)
          return(
            <View key={index}>
            <Text>{e.givenName+" "}{e.familyName+" "}{e.phoneNumbers[0].number}
            </Text>
            {/* <Text></Text>
            <Text></Text> */}
            </View>
          )
        })}
        </View>
      </ScrollView>
    </View>
  )
}

export default App;
