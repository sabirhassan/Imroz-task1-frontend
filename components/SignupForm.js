import React, {Component} from 'react';
import {  StyleSheet,  View,  TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import { Dimensions } from 'react-native';
import RadioGroup,{Radio} from "react-native-radio-input";



export default class SignForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
          email:'',
          fullname:'',
          password:'',
          confirmPassword:'',
          gender:'',
        }

        this._onPress = this._onPress.bind(this);

      }
      getChecked = (value) => {
        this.setState({gender:value})
      }
    
      _onPress() {
        if (this.state.email =='' || this.state.fullname =='' || this.state.password =='' || this.state.gender =='')
        {
          Alert.alert("please fill all fields")
          return
        }
        else if (this.state.password != this.state.confirmPassword )
        {
          Alert.alert("passwords does not match")
          return
        }

        fetch('http://10.0.2.2:8000/register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {fullname:this.state.fullname,
                  email:this.state.email,
                  password:this.state.password,
                  gender:this.state.gender
            })
          })
        .then(response => response.json())
        .then((responseJson) => {
            if(responseJson.status === 200)
            {
              Alert.alert("User Successfuly registered")
              this.props.navigator('LoginPage') 
            }
            else if(responseJson.status === 2)
            {
              Alert.alert("Email already exists")
            }
            
        })
        .catch(error => console.log(error))

      }


  render() {

    

    return (
      <View  style={styles.container}>

        <TextInput
            style={styles.input}
            placeholder="Fullname"
            value={this.fullname}
            onChangeText={text => this.setState({fullname:text})}
            placeholderTextColor={'rgba(225,225,225,0.7)'}
            underlineColorAndroid='transparent'
        />


        <TextInput
            style={styles.input}
            placeholder="Email"
            value={this.email}
            onChangeText={text => this.setState({email:text})}
            placeholderTextColor={'rgba(225,225,225,0.7)'}
            underlineColorAndroid='transparent'
        />
    
        
    
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={this.password}
            onChangeText={text => this.setState({password:text})}
            placeholderTextColor={'rgba(225,225,225,0.7)'}
            underlineColorAndroid='transparent'
        />
    
        <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={this.confirmPassword}
            onChangeText={text => this.setState({confirmPassword:text})}
            placeholderTextColor={'rgba(225,225,225,0.7)'}
            underlineColorAndroid='transparent'
        />

        <View style={{marginTop:20, marginBottom:20, marginHorizontal: 20}}>
        
            <RadioGroup getChecked={this.getChecked} >
                <Radio  label={"Male"} value={"male"} />
                <Radio  label={"Female"} value={"female"} />
                <Radio  label={"Others"} value={"other"} />
            </RadioGroup>

        </View>

        <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>

            <Text style={styles.text}>LOGIN</Text>

        </TouchableOpacity>
          

        

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
    marginTop:20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
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