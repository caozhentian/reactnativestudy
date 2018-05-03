import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    View ,
    Alert ,ToastAndroid ,ActivityIndicator
} from 'react-native';
import Net from '../net/net';
import UrlConstant from '../config/constant';
import Toast from 'react-native-root-toast';


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

export  default class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName:"" ,
            userPassword:"" ,
            showActivityIndicator:true ,
        }
    }
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
                    underlineColorAndroid={'transparent'} 
                    onChangeText = { userName => this.setState( {userName})}
                    />
                {/*密码*/}
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入密码'}
                    secureTextEntry={true}
                    underlineColorAndroid={'transparent'} 
                    onChangeText = {userPassword => this.setState({userPassword})}
                    />
                {/*登录*/}
                <TouchableHighlight style={styles.btnStyle} onPress={() => {
                     var that = this ;
                     _onPressButton(that)
                    }}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableHighlight>
                {/*无法登录  新用户*/}
                <View style={styles.canNot}>
                    <Text style={{color: '#4398ff'}}>无法登录</Text>
                    <Text style={{color: '#4398ff'}}>新用户</Text>
                </View>
                <ActivityIndicator animating = {this.state.showActivityIndicator}/>
            </View>
        );
    }
}

function _onPressButton( that ){
    let obj = that.state.userName
    that.setState({showActivityIndicator: false})
    if( typeof obj == "undefined" || obj == null || obj == ""){
        //ToastAndroid.show('请输入用户名!');
        Toast.show('请输入用户名!');
        //ToastAndroid.show('请输入用户名!', ToastAndroid.SHORT);
        return ;
    }
    let password = that.state.userPassword
    if( typeof password == "undefined" || password == null || password == ""){
        //ToastAndroid.show('请输入用户密码!');
        Toast.show('请输入用户密码!');
        //ToastAndroid.show('请输入用户密码!', ToastAndroid.SHORT);
        return ;
    }
    Net.initAxios() ;
    const data = { 'mobile': that.state.userName,'code': that.state.userPassword};
    var promise = Net.post(UrlConstant.URL_PATH_LOGIN ,data , model =>{
        {ToastAndroid.show(model.message, ToastAndroid.SHORT);}
    }) ;
    that.props.navigation.navigate("Main")
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