import React, {Component} from 'react';
import Logo from './logo';
import LoginForm from './LoginForm';
import Wallpaper from './background';


export default class LoginScreen extends Component {
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
    const { navigate } = this.props.navigation;

    return (
      <Wallpaper>
        <Logo />
        <LoginForm navigator={navigate} />
      </Wallpaper>
    );
  }
}