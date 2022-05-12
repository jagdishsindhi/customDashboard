import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Modal, Pressable, ScrollView, ActivityIndicator, SafeAreaView, Text, View, Button, Image } from 'react-native';
import { linear } from 'react-native/Libraries/Animated/Easing';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollview}>
        <ActivityIndicator size="small" color="#0000ff" />
        <StatusBar style="auto" />
        <Image
          style={{ width: 40, height: 40, marginBottom: 35, alignSelf: 'flex-start', left: 20 }}
          source={require('./assets/logo.png')}
        />
        <Text style={{ color: 'white', alignSelf: 'flex-start', left: 20 }}>Balance Store</Text>
        <LinearGradient
          start={{ x: 0.2, y: 0.25 }} end={{ x: 1.2, y: 0.0 }}
          locations={[0, 0.8]}
          colors={["#FC5C4B", "#FFA72F"]}
          style={styles.card}>
          <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'flex-start' }}>$ 46,000</Text>
        </LinearGradient>


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      <View
        style={styles.card3}>
        <Text style={{ color: 'white' }}>Popular Flowers</Text>
      </View>
      <View
        style={styles.card3}>
        <Text style={{ color: 'white' }}>Orders</Text>
      </View>
      <View style={styles.card3}>
        <Text style={{ color: 'white' }}>History</Text>
      </View>

    </ScrollView >

    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  scrollview: {
    alignSelf: 'auto',
    width: "90%",
    margin: 10
  },
  card: {
    top: 25,
    height: 150,
    width: "90%",
    alignItems: 'center',
    borderRadius: 30,
    padding: 50,
    zIndex: 10,
    elevation: 10,
    shadowColor: '#52006A',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  card3: {
    top: 50,
    justifyContent: 'center',
    backgroundColor: '#1C0C36',
    marginTop: 20,
    height: 130,
    width: "90%",
    alignItems: 'center',
    borderRadius: 30,
    zIndex: 10,
  },
  modalView:
  {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    
    marginBottom: 15,
    textAlign: "center"
  } ,
  button: {
    paddingTop:20,
    marginTop:80,
    width:"90%",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

