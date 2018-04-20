import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    View ,
    Alert
} from 'react-native';
import 'axios-response-logger';
import axios from 'axios'
import qs from 'qs';

/**
 *使用Flexbox布局
 *
 * flexDirection   决定主轴的排列方式，默认值是竖直轴(column)方向    [column,row]
 *
 * justifyContent    决定其子元素沿着主轴的排列方式        [flex-start,center,flex-end,space-around,space-between]
 *
 * alignItems    决定其子元素沿着次轴（与主轴垂直的轴）排列方式    [flex-start,center,flex-end,stretch]
 *
 * 注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
 *
 */

//屏幕信息
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export  default class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image style={styles.circleImage} source={require('../../image/logo.png')}/>
                {/*账户*/}
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入用户名'}
                    //输入框下划线
                    underlineColorAndroid={'transparent'}/>
                {/*密码*/}
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入密码'}
                    secureTextEntry={true}
                    underlineColorAndroid={'transparent'}/>
                {/*登录*/}
                <TouchableHighlight style={styles.btnStyle} onPress={() => { _onPressButton()}}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableHighlight>
                {/*无法登录  新用户*/}
                <View style={styles.canNot}>
                    <Text style={{color: '#4398ff'}}>无法登录</Text>
                    <Text style={{color: '#4398ff'}}>新用户</Text>
                </View>
            </View>
        );
    }
}

function _onPressButton(){
        axios.defaults.baseURL = 'http://diting.3tichina.com:80/diting/diting';    
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded,utf-8';
        axios.interceptors.request.use(function(config){
            //在发送请求之前做某事
            axios.defaults.headers.common['token'] = "djfj2";
            return config;
          },function(error){
            //请求错误时做些事
            return Promise.reject(error);
          });

        const data = { 'mobile': '13186076890','code': '1234' , 'IMEI': '893829ABC'};
        const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url:'/nologin/login'
        };
        axios(options)
        .then(function (response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      })
      .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
      });
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#dddddd',
        //设置次轴的对齐方式
        alignItems: 'center',
    },
    circleImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 100,
        marginBottom: 25,
    },
    textInput: {
        height: 40,
        width: width,
        marginBottom: 5,
        backgroundColor: 'white',
        textAlign: 'center',
    },
    canNot: {
        width: width - 32,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        //设置主轴为两端对齐
        justifyContent: 'space-between',
    },
    loginTheWay: {
        flexDirection: 'row',
        //设置次轴的对齐方式
        alignItems: 'center',
        justifyContent: 'flex-start',
        //绝对定位
        position: 'absolute',
        //距离底部还有30 距离左边还有10 这样的一个位置
        bottom: 30,
        left: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 5,
        borderRadius: 25,
    },
    btnStyle: {
        height: 40,
        width: width - 32,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#4398ff',
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
    }

});
//module.exports = LoginView;