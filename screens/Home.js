import React, { useEffect, useState } from 'react';
import { Text, View, PermissionsAndroid, TouchableOpacity, Alert, Modal, Image, StyleSheet, Dimensions, TextInput, Pressable, Button } from 'react-native';
import Contacts from 'react-native-contacts';
import Color from '../Constants/Color';
import { ScrollView, } from 'react-native-gesture-handler';
import icon from '../Assets/icon.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowDimension = Dimensions.get('screen');

const Home = ({ navigation }) => {
  const [allContact, setallContact] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [warning, setWarning] = useState(false);
  const [category, setCategory] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app wants to add contacts',
        'buttonPositive': 'Please Accept'
      }
    )

    getContactsAndCategory();

  }, [])

  const getContactsAndCategory = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app wants to view your contacts',
        'buttonPositive': 'Please Accept'
      }
    ).then(() => {
      Contacts.getAllWithoutPhotos().then((contacts) => {
        console.log(contacts.length);
        let contactarr = [];
        contacts.forEach(e => {
          // console.log(e.displayName)
          const data = {
            name: e.displayName,
            phoneNumber: e.phoneNumbers[0].number,
            department: e.department,
            id: e.recordID
          }
          contactarr.push(data)
        })
        contactarr.sort((a, b) => a.name.localeCompare(b.name));
        setallContact(contactarr);

        AsyncStorage.getItem('categories').then((categoriesJSON) => {
          if (categoriesJSON) {
            const categories = JSON.parse(categoriesJSON);
            let newcategoryData = [];
            console.log("Total categories = ", categories)

            console.log("Total contacts = ", contactarr.length)
            for (const category of categories) {
              const data = contactarr.filter((contact) => category === contact.department);
              let contactArray = {
                name: category,
                contacts: data,
              };
              newcategoryData.push(contactArray);
            }
            setCategoryData(newcategoryData);
          }
        })
      }).catch((e) => {
        console.log(e);
      })
    });
  }

  const setByCategory = async () => {
    // setting all contacts according to categories.
    let categories = JSON.parse(await AsyncStorage.getItem('categories'));
    let newcategoryData = [];
    categories.map((category) => {
      let data = allContact.filter((contact) => category === contact.department);

      let contactArray = {
        name: category,
        contacts: data
      }
      newcategoryData.push(contactArray);
    })
    setCategoryData(newcategoryData);
  }

  // Saving the category to async storage.
  const onSaveHandle = async () => {
    if (category === '') {
      setWarning(true);
    }
    else {
      let categories = JSON.parse(await AsyncStorage.getItem('categories'));
      if (categories === null) {
        categories = [];
        categories.push(category)
      }
      else {
        categories.push(category)
      }
      AsyncStorage.setItem('categories', JSON.stringify(categories));

      setByCategory();
      setCategory('');

      setModalVisible(false)
    }
  }

  const onDeleteHandle = async (index) => {
    Alert.alert(
      'Delete Category',
      'Are you sure you want to delete this category.',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Ok',
          onPress: async () => {
            let categories = JSON.parse(await AsyncStorage.getItem('categories'));
            categories.splice(index, 1);
            AsyncStorage.setItem('categories', JSON.stringify(categories));

            setByCategory();

          }
        }
      ],
      {
        cancelable: true
      }
    )
  }

  return (
    <ScrollView>
      <View>
        {/* All Contacts button  */}
        <View style={{ marginLeft: windowDimension.width / 1.75 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AllContacts', { name: 'All contacts', allContacts: allContact, getContactsAndCategory: getContactsAndCategory })}
          >

            <View
              style={{
                height: 50,
                backgroundColor: Color.seaside.c3,
                borderWidth: 0,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginTop: 10,
                padding: 10
              }}>
              <Text style={{ color: 'white', fontSize: 18,fontWeight: '700', }}>
                {/* {item.unread_messages_count} */}
                All Contacts
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 14 }}>
          {/* All categories */}

          {categoryData.map((item, index) => {
            return (
              <View key={index} style={styles.mainCardView}>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AllContacts', { name: item.name, allContacts: item.contacts, getContactsAndCategory: getContactsAndCategory })}
                  >

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                      <View style={{ marginLeft: 12, width: '60%', overflow: 'hidden', maxHeight: 30, }}>
                        <Text
                          style={{
                            fontSize: 22,
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ width: 30, height: 30, left: -20, alignItems: 'center' }}
                    onPress={() => onDeleteHandle(index)}
                  >
                    <Text style={{ color: 'black', fontSize: 22, }}>🗑️</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: windowDimension.width / 2.4 }}>

                  <Text style={{ marginLeft: 80, color: Color.seaside.c4 }}>{item.contacts.length} contacts</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddContact', { name: item.name,getContactsAndCategory: getContactsAndCategory })}
                >

                  <View
                    style={{
                      height: 50,
                      backgroundColor: Color.seaside.c3,
                      borderWidth: 0,
                      width: 150,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 50,
                      marginTop: 10,
                      padding: 10
                    }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>
                      {/* {item.unread_messages_count} */}
                      ➕  Add More
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })}


        </View>

        {/* Modal for Filing new category details */}
        <Modal
          style={{ flex: 1, }}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false)
          }}>
          <View style={{ marginTop: 50, marginHorizontal: (windowDimension.width - windowDimension.width * 0.8) / 2, position: 'absolute', width: '80%', height: 400, }}>
            <View style={{ backgroundColor: 'white', width: '100%', height: '100%', borderRadius: 10, }}>
              <View style={{ height: 220, backgroundColor: Color.dark2.c3, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <View style={styles.inputImage}>
                  <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                      borderRadius: 200,
                      height: '100%',
                      width: '100%',
                      position: 'absolute'
                    }}
                  />
                  {/* Edit icon */}
                  <TouchableOpacity>
                    <View style={{ width: 40, height: 40, left: -20, top: -20, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 24, color: 'black' }}>✏️</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <TextInput
                style={styles.input}
                onChangeText={setCategory}
                value={category}
                placeholder="Category name"
                placeholderTextColor={Color.dark2.c1}
                keyboardType='default'
              />
              {warning && <Text style={{ color: Color.neon2.c2, marginLeft: 10, fontWeight: '600' }}>❗Category can not be blank</Text>}
              <View style={styles.container}>

                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                >
                  <View style={styles.button}>
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Cancel</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={onSaveHandle}
                >
                  <View style={styles.button}>
                    <Text style={{ color: "white", fontSize: 17, fontWeight: 'bold' }}>Save</Text>
                  </View>
                </TouchableOpacity>

              </View>

            </View>
          </View>
        </Modal>


        {/* create category button */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}
        >
          <View style={styles.addCategory}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>➕   Add a new category</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    left: -20,
    margin: 20,
    padding: 10,
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    margin: 5,
    padding: 5,
    height: 40,
    width: 100,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  input: {
    fontSize: 18,
    height: 60,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    color: Color.dark.c2
  },
  mainCardView: {
    width: windowDimension.width / 2.4,
    height: windowDimension.height / 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.seaside.c1,
    borderRadius: 15,
    shadowColor: Color.vintage.c1,
    elevation: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10
  },
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
  },
  addCategory: {
    width: '86%',
    height: 50,
    backgroundColor: Color.dark2.c3,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: Color.dark.c1,
    elevation: 10,
  },
  inputImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});

export default Home