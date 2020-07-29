import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SignUp } from './src/views/SignUp';
import { Login } from './src/views/Login';
import { ForgotPassword } from './src/views/ForgotPassword';
import { MainPage } from './src/views/MainPage';
import { Categories } from './src/views/Categories';
import { MyBag } from './src/views/MyBag';
import { MyProfile } from './src/views/MyProfile';
import storybook from './storybook';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const IS_STORYBOOK = false;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Intro({ navigation }) {
  return (
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1E1F28',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: '' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: '' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: '' }} />
      </Stack.Navigator>
  );
}

function Main({ navigation }) {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'MainPage') {
              iconName = "home-outline"
            } else if (route.name === 'Categories') {
              iconName = "cart-outline";
            } else if (route.name === 'MyBag') {
              iconName = "shopping";
            } else if (route.name === 'MyProfile') {
              iconName = "account-outline";
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
      tabBarOptions={{
        activeTintColor: '#EF3651',
        inactiveTintColor: '#ABB4BD',
        style: {
          backgroundColor: '#1E1F28',
        },
      }}>
        <Tab.Screen name="MainPage" component={MainPage} options={{ title: 'Home' }} />
        <Tab.Screen name="Categories" component={Categories} options={{ title: 'Shop' }} />
        <Tab.Screen name="MyBag" component={MyBag} options={{ title: 'Bag' }} />
        <Tab.Screen name="MyProfile" component={MyProfile} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContentOptions={{
        activeTintColor: '#EF3651',
        inactiveTintColor: '#ABB4BD'
      }} 
      initialRouteName="Intro"
      drawerStyle={{
        backgroundColor: '#1E1F28',
        width: 240,
      }}
      >
        <Drawer.Screen name="Intro" component={Intro} options={{ title: 'Sign In' }} />
        <Drawer.Screen name="MainPage" component={Main} options={{ title: 'Main' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default (IS_STORYBOOK ? storybook : App)