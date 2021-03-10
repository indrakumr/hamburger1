import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image,StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
import HomePage from './src/Screen/HomePage';
import SettingsPage from './src/Screen/SettingPage';
import NotificationsPage from './src/Screen/Notification';
import ProfilePage from './src/Screen/ProfilePage';

const CustomDrawerNavigation = (props) => {
  return (
  <SafeAreaView style={{ flex: 1 }}>
  <View style={{ height: 250, backgroundColor: '#d2d2d2', opacity: 0.9 }}>
  <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
  {/* <Image source={require('./assets/no-image.png')} style={{ height: 150, width: 150, borderRadius: 60 }} /> */}
  </View>
  <View style={{ height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
  <Text>Hello</Text>
  </View>
  </View>
  <ScrollView>
  <DrawerItems {...props} />
  </ScrollView>
  <View style={{ alignItems: "center", bottom: 20 }}>
  <View style={{ flexDirection: 'row' }}>
  <View style={{ flexDirection: 'column', marginRight: 15 }}>
  <Icon name="flask" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
  </View>
  <View style={{ flexDirection: 'column' }}>
  <Icon name="call" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
  </View>
  </View>
  </View>
  </SafeAreaView>
  );
  }
  const Drawer = createDrawerNavigator({
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Homepage'
      }
    },
    ProfilePage: {
      screen: ProfilePage,
      navigationOptions: {
        title: 'ProfilePage'
      }
    },
    Notifications: {
      screen: NotificationsPage,
      navigationOptions: {
        title: 'Notifications'
      }
    },
    SettingsPage: {
      screen: SettingsPage,
      navigationOptions: {
        title: 'SettingsPage'
      }
    }
  },
    {
      drawerPosition: 'left',
      contentComponent: CustomDrawerNavigation,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      drawerWidth: (width / 3) * 2
    });

    const App = createAppContainer(Drawer);

export default App;