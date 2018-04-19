import React from 'react';
import { View, Text ,Image ,StyleSheet} from 'react-native';
import { TabNavigator,TabBarBottom } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  tabBarIcon: {
      width: 18,
      height: 18,
  }
});


const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions :{
      title:"首页" ,
      tabBarIcon: ({ focused }) =>
        {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('./src/image/ic_tabbar_home_s.png')}/>
                );
            }
            return (
                <Image  style={styles.tabBarIcon} source={require('./src/image/ic_tabbar_home.png')}/>
            );
        },

    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions :{
      title:"我的" ,
      tabBarIcon: ({ focused }) =>
        {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('./js/img/ic_tabbar_user_s.png')}/>
                );
            }
            return (
                <Image  style={styles.tabBarIcon} source={require('./js/img/ic_tabbar_user.png')}/>
            );
        },
    }
  }
  },
  { 
    
    tabBarOptions: {
      activeTintColor: '#4BC1D2',
      inactiveTintColor: '#000',
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: '#788493',
      pressOpacity: 0.8,
      style: {
          backgroundColor: '#fff',
          paddingBottom: 0,
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
      },
      labelStyle: {
          fontSize: 12,
          margin: 1
      },
      indicatorStyle: {height: 0},
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: false,
  lazy: true,
  backBehavior: 'none',   
  }
);

export default RootTabs;

//  1、去掉安卓下的下划线，设置：tabBarOptions => indicatorStyle:{ height: 0 }；
//  2、底部导航在导航最上方添加一条分割线，设置：tabBarOptions => style => borderTopWidth: 0.5, borderTopColor: '#ccc'；
//  3、导航安卓图标和文字间隙比较大，手动调整小设置：tabBarOptions => labelStyle => margin: 0；

