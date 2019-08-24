import React from 'react';
import { StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'

const MainNavigator = createStackNavigator(
  {
    Home:{screen:HomeScreen},
    Register:{screen:RegisterScreen}
  },
  {
    initialRouteName:'Home',
  },
  
  )

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component{

  render(){
    return(
      <AppContainer style={{padding: 40}} />
    )
  }
} 
  

