import React, {Component} from 'react';
import Wallpaper from './background';
import HomeActivity from './homeactivity'

export default class HomeScreen extends Component {
    static navigationOptions = {
        //Sets Header text of Status Bar
        title: 'Home',
        
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
          <HomeActivity navigator={navigate}/>

      </Wallpaper>
    );
  }
}