import React, {Component} from 'react';
import {
    AppRegistry,Text,View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen  from './src/js/view/LoginPage';
import RootTabs  from './src/js/view/MainPage';

export const RootStackRootStack = StackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions:{
        header:null
      }
    },
    Main: {
        screen: RootTabs,
    },
  } 
  , {
    initialRouteName: 'Login',
  });

export default  class LoginPage extends Component {
    render() {
        return (
        //字母必须大写开头
        //<LoginView></LoginView>  
        <RootStackRootStack/>);
    }

    componentDidMount(){
        
    }
}

