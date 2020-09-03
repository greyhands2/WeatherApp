import React from 'react';
import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';
import { Button, Icon } from "native-base";
import HomeScreen from './screens/HomeScreen';
import WeatherScreen from './screens/WeatherScreen';
import CitiesScreen from './screens/CitiesScreen';
import {DrawerActions} from 'react-navigation-drawer';



const drawerNavigator = createDrawerNavigator(
  {
  Home: {
    screen: HomeScreen
  },
  Cities: {
    screen: CitiesScreen
  }

  },
  
  {
   hideStatusBar: false,
    
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#dedbda',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#1287A5',
    },
  }
);

const stackNavigator = createStackNavigator(
  {
    
    
    Drawer: {
      screen: drawerNavigator
    },
    Home: {
      screen: HomeScreen
    } ,
    Weather: {
      screen: WeatherScreen
    },
    Cities: {
      screen: CitiesScreen
    }
    

},
// {
//   // launcherscreen
//   initialRouteName: "Cities"

// },
{
defaultNavigationOptions: ({navigation}) =>{
  return {
  title: "Weather App",
  headerTintColor: "#1287A5",
  headerRight: 
    <Button onPress={()=>{

      navigation.dispatch(DrawerActions.toggleDrawer());     
     
  }} transparent>
    <Icon  style={{fontSize: 20, color: '#1287A5'}} name='menu' />
  </Button>
  ,
  headerStyle: {
    backgroundColor: "#fff",
    height: 50,
    alignContent: "center"
  },
  headerTitleStyle: {
    color: "#1287A5",
    fontWeight: "bold"

  }
}
}
}

);



const App = createAppContainer(stackNavigator);

export default App;


