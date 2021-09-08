import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';


export default class HomeScreen extends React.Component {
 aishu1Pressed(){
  var aishu1 = db.ref('Aishu/' + '/')
  aishu1.update({
    'absent': 'true'
  })
}

aishu2Pressed(){
  var aishu2 = db.ref('Aishu/' + '/')
  aishu2.update({
    'present': 'true'
  })
}
anajli1Pressed(){
  var anjali1 = db.ref('Anjali/' + '/')
  anjali1.update({
    'absent': 'true'
  })
}

anjali2Pressed(){
  var anjali2 = db.ref('Anjali/' + '/')
  anjali2.update({
    'present': 'true'
  })
}
ravi1Pressed(){
  var aishu1 = db.ref('Ravi/' + '/')
  aishu1.update({
    'absent': 'true'
  })
}

ravi2Pressed(){
  var aishu2 = db.ref('Ravi/' + '/')
  aishu2.update({
    'present': 'true'
  })
}
jacob1Pressed(){
  var anjali1 = db.ref('Jacob/' + '/')
  anjali1.update({
    'absent': 'true'
  })
}

jacob2Pressed(){
  var anjali2 = db.ref('Jacob/' + '/')
  anjali2.update({
    'present': 'true'
  })
}

  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.studenChartContainer}>Aishu</Text>
        <Text style={styles.studenChartContainer}>Anjali</Text>
        <Text style={styles.studenChartContainer}>Ravi</Text>
        <Text style={styles.studenChartContainer}>Jacob</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.aishu1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button }
          onPress={() => {
            this.anjali1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
               this.ravi1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
             this.jacob1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
           <TouchableOpacity
          style={styles.button2}
          onPress={() => {
           this.aishu2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
             this.anjali2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.ravi2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.jacob2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  studenChartContainer: {
     flexDirection: 'row',
     padding: 15,
     alignItems: 'center',
     margin: 20
  },
  button: {
    width:'30%',
    height:40,
    backgroundColor:'red',
    justifyContent:'center',
    textAlign:'center',
    borderRadius:3,
    borderRadius: 5,
margin:-65,
marginLeft:200

  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  button2: {
      width:'30%',
    height:40,
    backgroundColor:'green',
    justifyContent:'center',
    textAlign:'center',
    borderRadius:3,
    //borderRadius: 5,
margin:25,
marginLeft:80

  },
  button2Text: {
    textAlign: 'center',
    color: 'white',
  },
  button3: {
     width:'30%',
    height:40,
    backgroundColor:'yellow',
    justifyContent:'center',
    textAlign:'center',
    borderRadius:3,
    //borderRadius: 5,
margin:25,
marginLeft:120
  },
   button3Text: {
    textAlign: 'center',
    color: 'purple',
  },
 
});