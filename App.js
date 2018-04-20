import React, {Component} from 'react';
import {
    AppRegistry,Text,View
} from 'react-native';
import LoginView  from './src/js/view/loginview';
export default  class LoginPage extends Component {
    render() {
        return (
        //字母必须大写开头
        <LoginView></LoginView>  
        );
    }
}

