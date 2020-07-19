import React , {useState, Component} from 'react';
import {ActivityIndicator, StatusBar, AsyncStorage, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from './components/login'
import SignupScreen from './components/Signup'
import HomeScreen from './components/dashboard'

const AppStack = createStackNavigator({ 

    HomePage: { screen: HomeScreen }, 

  }
);

const Authstack = createStackNavigator({LoginPage: LoginScreen ,    SignupPage: SignupScreen });

class AuthLoadingScreen extends Component{
  constructor(props){
    super(props)
    this._loadData();
  }

  render(){
    return(
      <View>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>

      </View>
    )
  }

  _loadData = async() => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
    this.props.navigation.navigate(isLoggedIn !== '1'  ? "Auth" : "App")
  }

}

export default createAppContainer(createSwitchNavigator(
  
  {
    AuthLoading: AuthLoadingScreen,
    App : AppStack,
    Auth: Authstack,
  },
  {
    initialRouteName: 'AuthLoading'
  }

))