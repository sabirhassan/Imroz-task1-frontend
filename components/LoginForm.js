import React, {Component} from 'react';
import {  StyleSheet,  View,  TextInput, TouchableOpacity, Text, Alert, AsyncStorage} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'



export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:'',
          showPass: true,
          press: false,
        };

        this._onPress = this._onPress.bind(this);
        this.showPass = this.showPass.bind(this);

      }
    
      _onPress = () => {

        fetch('http://10.0.2.2:8000/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:this.state.email, password:this.state.password})
          })
        .then(response => response.json())
        .then((responseJson) => {
            if(responseJson.status === 200)
            {
              AsyncStorage.setItem('isLoggedIn', '1')
              AsyncStorage.setItem('email', responseJson.user.email)
              AsyncStorage.setItem('password', responseJson.user.password)
              this.props.navigator('HomePage') 
            }
            else if(responseJson.status === 1)
            {
              Alert.alert("Invalid password")
            }
            else if(responseJson.status === 2)
            {
              Alert.alert("Invalid Credentials")
            }
            
        })
        .catch(error => console.log(error))

      }


      showPass() {
        this.state.press === false
          ? this.setState({showPass: false, press: true})
          : this.setState({showPass: true, press: false});
      }




  render() {

    

    return (
      <View  style={styles.container}>
        
        <View style={styles.inputContainer}>
            <Icon name={'person'} size={28} color={'rgba(225,225,225,0.7)'} style={styles.inputIcon}/>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={this.state.email}
                onChangeText={val=> this.setState({email:val})}
                placeholderTextColor={'rgba(225,225,225,0.7)'}
                underlineColorAndroid='transparent'
            />
        </View>
        
        <View style={styles.inputContainer}>
            
            <Icon name={'key'} size={28} color={'rgba(225,225,225,0.7)'} style={styles.inputIcon}/>
        
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={this.state.showPass}
                placeholderTextColor={'rgba(225,225,225,0.7)'}
                value={this.state.password}
                onChangeText={val=> this.setState({password:val})}
                underlineColorAndroid='transparent'
            />
        
            <TouchableOpacity style={styles.btneye} onPress={this.showPass}>
                <Icon name={'eye'} size={26} color={'rgba(225,225,225,0.7)'} />
            </TouchableOpacity>

        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
              <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
          
      </View>

        <View style={styles.inputContainer}>
        
          <TouchableOpacity
              onPress={()=>this.props.navigator('SignupPage')}
              activeOpacity={1}>
              <Text style={styles.text}>Create Account</Text>
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
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputContainer:{
      alignItems:'center',
      marginBottom:20
  },
  inputIcon:{
      position:"absolute",
      top:8,
      left:37,
  },
  btneye:{
    position:"absolute",
    top:8,
    right:37,
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