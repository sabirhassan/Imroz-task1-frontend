import React, {Component} from 'react';
import {  StyleSheet,  View,  TextInput, TouchableOpacity, Text, Alert, AsyncStorage} from 'react-native';
import { Dimensions } from 'react-native';



export default class HomeActivity extends Component {
    constructor(props) {
        super(props);
       
        this._onPress = this._onPress.bind(this);
       
      }

      _onPress = () => {
          AsyncStorage.clear()
          this.props.navigator("Auth")

      }


  render() {

    

    return (
      <View  style={styles.container}>
        


        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
              <Text style={styles.text}>LOGOUT</Text>
          </TouchableOpacity>
          
      </View>


      </View>
    );
  }
}






const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const MARGIN = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },

  inputContainer:{
      alignItems:'center',
      marginBottom:20
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    marginHorizontal: 20,
    width: DEVICE_WIDTH - 40,
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  }

});