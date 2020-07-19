import React, {Component} from 'react';
import SignupForm from './SignupForm';
import Logo from './logo';
import Wallpaper from './background';


export default class SignupScreen extends Component {
    static navigationOptions = {
        //Sets Header text of Status Bar
        title: 'Login',
        
        headerStyle: {
          //Sets Header color
          backgroundColor: '#f542e3',
       
        },
        
        //Sets Header text color
        headerTintColor: '#fff',
    
        headerTitleStyle: {
          //Sets Header text style
          fontWeight: 'bold',
        },
      };
  render() {
    return (
      <Wallpaper>
        <SignupForm/>
      </Wallpaper>
    );
  }
}