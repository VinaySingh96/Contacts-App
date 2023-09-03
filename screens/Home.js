import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Color from '../Constants/Color';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../Assets/logo.png'

const windowDimension = Dimensions.get('screen');

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 14 }}>
        <View style={styles.mainCardView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactsScreen')}
          >

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.subCardView}>
                <Image
                  source={logo}
                  resizeMode="contain"
                  style={{
                    borderRadius: 25,
                    height: 40,
                    width: 40,
                  }}
                />
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  {'Family'}
                </Text>

              </View>
            </View>
          </TouchableOpacity>
          <View style={{width:windowDimension.width/2.4}}>

          <Text style={{marginLeft:80,color:Color.seaside.c4}}>69 Contacts</Text>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate('AddContact')}
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
                +  Add More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainCardView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactsScreen')}
          >

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.subCardView}>
                <Image
                  source={logo}
                  resizeMode="contain"
                  style={{
                    borderRadius: 25,
                    height: 40,
                    width: 40,
                  }}
                />
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  {'Family'}
                </Text>

              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>

            <View
              style={{
                height: 50,
                backgroundColor: Color.seaside.c3,
                borderWidth: 0,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginTop: 20,
                padding: 10
              }}>
              <Text style={{ color: 'white', fontSize: 18 }}>
                {/* {item.unread_messages_count} */}
                +  Add More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainCardView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactsScreen')}
          >

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.subCardView}>
                <Image
                  source={logo}
                  resizeMode="contain"
                  style={{
                    borderRadius: 25,
                    height: 40,
                    width: 40,
                  }}
                />
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  {'Family'}
                </Text>

              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>

            <View
              style={{
                height: 50,
                backgroundColor: Color.seaside.c3,
                borderWidth: 0,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginTop: 20,
                padding: 10
              }}>
              <Text style={{ color: 'white', fontSize: 18 }}>
                {/* {item.unread_messages_count} */}
                +  Add More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainCardView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactsScreen')}
          >

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.subCardView}>
                <Image
                  source={logo}
                  resizeMode="contain"
                  style={{
                    borderRadius: 25,
                    height: 40,
                    width: 40,
                  }}
                />
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  {'Family'}
                </Text>

              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>

            <View
              style={{
                height: 50,
                backgroundColor: Color.seaside.c3,
                borderWidth: 0,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginTop: 20,
                padding: 10
              }}>
              <Text style={{ color: 'white', fontSize: 18 }}>
                {/* {item.unread_messages_count} */}
                +  Add More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainCardView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactsScreen')}
          >

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.subCardView}>
                <Image
                  source={logo}
                  resizeMode="contain"
                  style={{
                    borderRadius: 25,
                    height: 40,
                    width: 40,
                  }}
                />
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  {'Family'}
                </Text>

              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>

            <View
              style={{
                height: 50,
                backgroundColor: Color.seaside.c3,
                borderWidth: 0,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginTop: 20,
                padding: 10
              }}>
              <Text style={{ color: 'white', fontSize: 18 }}>
                {/* {item.unread_messages_count} */}
                +  Add More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainCardView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactsScreen')}
          >

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.subCardView}>
                <Image
                  source={logo}
                  resizeMode="contain"
                  style={{
                    borderRadius: 25,
                    height: 40,
                    width: 40,
                  }}
                />
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  {'Family'}
                </Text>

              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>

            <View
              style={{
                height: 50,
                backgroundColor: Color.seaside.c3,
                borderWidth: 0,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginTop: 20,
                padding: 10
              }}>
              <Text style={{ color: 'white', fontSize: 18 }}>
                {/* {item.unread_messages_count} */}
                +  Add More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: Color.seaside.c4,
  // },
  mainCardView: {
    width: windowDimension.width / 2.4,
    height: windowDimension.height / 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.seaside.c1,
    borderRadius: 15,
    shadowColor: 'grey',
    //shadowOffset: { width: -2, height: 2 },
    //shadowOpacity: 2,
    elevation:20,
    //shadowRadius: 3,
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
});

export default Home