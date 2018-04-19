import React, {Component} from 'react';
import {
    AppRegistry,Text,
} from 'react-native';
//import  {LoginView}  from './src/js/view/loginview';
var LoginView = require('./src/js/view/loginview');
export default  class LoginPage extends Component {
    render() {
        return (
            //字母必须大写开头
            <LoginView/>
        );
    }
}

AppRegistry.registerComponent('LoginPage', () => LoginPage);

