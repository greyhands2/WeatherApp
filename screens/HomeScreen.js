import React from 'react';
import { Alert, StyleSheet, Text, View, FlatList, ActivityIndicator,  ScrollView, Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';


import {  Container, Content, Form, Item, Input, Label, Button, Icon } from "native-base";
import { AppLoading } from 'expo';
import { Header } from "react-navigation";


export default class  HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataPayLoad: {},
      location: "",
      animationColor: "#ffffff"

    }
  }

  
  // static navigationOptions = ({ navigation, screenProps }) => ({
  //     headerTitle: "Weather App",
      
  //     headerRight: (
  //       <Button onPress={()=>{

  //             console.log(navigation)
  //             navigation.dispatch(DrawerActions.toggleDrawer());
  //         // screenProps.navigation.dispatch(DrawerActions.toggleDrawer())
  //     }} transparent>
  //       <Icon  style={{fontSize: 20, color: '#1287A5'}} name='menu' />
  //     </Button>
  //     ),
  // });

  async componentDidMount(){
    await Expo.Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')

    });
    this.setState({ isLoading: false });
  }


  getWeatherApiData = async () => {
    if(this.state.location !== ""){
      
    this.setState({animationColor: "#1287A5"});
    const apiKey = '9df4f94924d7a9783df6945e90757c64';
    let urL= 'https://samples.openweathermap.org/data/2.5/weather?q='+this.state.location+'&appid='+apiKey;
    console.log(urL);
    fetch(urL)
    .then((resp)=>resp.json())
    .then((respJSON)=>{
     // console.log(respJSON)
      this.setState({
        dataPayLoad: respJSON,
        animationColor: "#ffffff"
        

      }, ()=>{
        this.props.navigation.navigate("Weather", {result: this.state.dataPayLoad});

      })
      
    })
    .catch((err)=>{
      console.log(err);
    })
  } else {
    Alert.alert("Type in a Location");
  }

  }


 
  render(){
    if(this.state.isLoading){
      return (<AppLoading />);
 
      }
   return (
    <TouchableWithoutFeedback
    onPress={() => {
      // dismiss the keyboard if touch any other area then input
      Keyboard.dismiss;
    }}
  >
   
      
    
        
        <View style={styles.container}>
          <Form>
            <Item style={styles.input} regular>
              <Label style={styles.label}>Location:</Label> 
              <Input autoCapitalize="none"
         keyboardType="default"
          onChangeText={(input)=> {
                
                  this.setState({location: input});
                 
                  
                  }}/>
            </Item>
            
          </Form>
          <Button onPress={()=>{

              
              this.getWeatherApiData()
          }} style={styles.button}>
            <Text style={styles.buttonText}>Check Weather</Text>
          </Button>
          <ActivityIndicator style={{marginTop:15}} size="large" color={this.state.animationColor}/>
        
        </View>
       
        
      
     
      
      </TouchableWithoutFeedback>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
    marginTop: "50%"
  },
  content: {
    justifyContent: "center",

  },
  button: {
      justifyContent: "center",
      width:"80%",
      marginTop: 20,
      marginBottom: 30,
      alignSelf: "center",
      borderRadius: 5,
      backgroundColor: "#1287A5"
      
      
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"

  },
  input: {
    borderWidth: 3,
    borderColor: "#dedbda",
    borderRadius: 6,
    width: "80%",
    alignSelf: "center",
    padding: 5
  }, 
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#c1c1c1"
  }
});
