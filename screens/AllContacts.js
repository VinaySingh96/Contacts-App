import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, FlatList, ActivityIndicator, Linking, Image, StyleSheet, Dimensions, LayoutAnimation, Pressable } from 'react-native';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import icon from '../Assets/icon.png'
import Color from '../Constants/Color';


const screenDimension = Dimensions.get('screen');

const AccordionItem = React.memo(({ item, isExpanded, onToggle, makeCall, sendSMS }) => {
  return (
    <TouchableOpacity onPress={() => onToggle(item.id)}>
      <View >

        <View style={[styles.contactsCard, { height: isExpanded ? 100 : 70, borderRadius: isExpanded ? 30 : 40 }]}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', width: '100%' }}>
            <View style={styles.subCardView}>
              <Image
                source={icon}
                resizeMode="contain"
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 50,
                }}
              />
            </View>

            <View style={{ width: '100%',  }}>
              <View style={{width:'100%',display:'flex',flexDirection:'row' }}>

              <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', width: '60%' }}> {item.name}</Text>
            <TouchableOpacity
            style={{tintColor:'red'}}
              >
              <Text style={{color:'black', fontSize: 24,  }}>🗑️</Text>

            </TouchableOpacity>
              </View>
              
                {isExpanded && <View style={styles.horizontalLine} />}
            </View>

            <View style={{ width: 100,backgroundColor:'red' }} ></View>

          </View>
          {isExpanded &&
            <View style={styles.contentBottom}>
              <Text style={{ color: 'black', fontSize: 14 }}> {item.phoneNumber}</Text>
              <View style={{ width: '40%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPressOut={() => makeCall(item.phoneNumber)}>
                  <Text style={{ color:'black', fontSize: 24 }}> 📞</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={() => sendSMS(item.phoneNumber)}>
                  <Text style={{ color:'black', fontSize: 24 }}> 📤</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        </View>
      </View>
    </TouchableOpacity>
  );
});

const AllContacts = ({ navigation, route }) => {

  const [allContact, setallContact] = useState([]);
  const [loading, setloading] = useState(true);
  const [toggleDetails, setToggleDetails] = useState(null);

  useEffect(() => {
    setallContact(route.params.allContacts);
    setloading(false);

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('AddContact')}
          style={{ width: '20%' }}>
          <Text style={{ color:'black',fontSize: 20 }}>➕</Text>
        </TouchableOpacity>
      )
    })
  }, [])

  const [expandedItem, setExpandedItem] = useState(null);

  const isItemExpanded = (itemId) => expandedItem === itemId;

  const toggleAccordion = (itemId) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  const makeCall = (phoneNumber) => {
    console.log(phoneNumber)
    Linking.openURL(`tel:${phoneNumber}`);
  };
  const sendSMS = (phoneNumber) => {
    Linking.openURL(`sms:${phoneNumber}?body=${encodeURIComponent("")}`);
  };


  return (
    // <ScrollView >
    <View style={{ backgroundColor: Color.vintage2.c1, height: screenDimension.height, padding: 5 }}>
      {loading && <ActivityIndicator size='large' style={{ marginTop: screenDimension.height / 2.2 }} />}
      <View style={{ marginLeft: -10 }}>
        <FlatList
          showsVerticalScrollIndicator={true}
          data={allContact}
          keyExtractor={(item) => item.id}
          initialNumToRender={40}
          windowSize={4}
          renderItem={({ item }) => (
            <AccordionItem
              item={item}
              isExpanded={isItemExpanded(item.id)}
              onToggle={toggleAccordion}
              makeCall={makeCall}
              sendSMS={sendSMS}
            />
          )}
        />
      </View>
    </View>
    // </ScrollView>
  )
}


const styles = StyleSheet.create({
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    borderColor: Color.seaside.c2,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  contactsCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'center',
    width: screenDimension.width / 1.1,
    backgroundColor: Color.vintage2.c4,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 6,
    borderWidth: 2,
    borderColor: Color.dark2.c1,
    borderRadius: 50
  },
  contentBottom: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  horizontalLine: {
    // height: 10,
    width: '70%',
    borderBottomColor: 'grey', // Line color
    borderBottomWidth: 1,
    borderBottomRadius: 1,     // Line thickness
    marginTop: 10
  },
})

export default AllContacts;