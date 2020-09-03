import React from 'react';
import { Alert, StyleSheet, ActivityIndicator, Image, View} from 'react-native';
import {Container,Content, Card, CardItem, Body, Text,Button} from 'native-base';


export default class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      cityName: "",
      mainWeather: "",
      description: "",
      iconUrl: "",
      country: ""


    }
  }

  static navigationOptions = {
    title: "Weather Results"
}



  
 componentDidMount(){
  

  const navigation = this.props.navigation;
  navigation.addListener("willFocus", ()=>{
    var result = this.props.navigation.getParam("result", []);


   this.setState({
    iconUrl: "http://openweathermap.org/img/wn/"+result.weather[0].icon+"@2x.png",
    cityName: result.name,
    country: result.sys.country,
    mainWeather: result.weather[0].main,
    description: result.weather[0].description
    })

  });
}

 
  render(){
    
//  let image= this.props.navigation.getParam("result");
//     let url = image.weather[0].icon;
//     let imgURL = "http://openweathermap.org/img/wn/"+url+"@2x.png";
//     Alert.alert(imgURL)
   return (
    <Container >
    
    <Content>
      <Card style={{marginTop: "50%",  width: "85%", alignSelf: "center"}}>
        <CardItem>
          <Body>
            <View style={{flexDirection: "row"}}> 
              <View style={{flex: 5,  flexDirection: "column", padding: 10}}>
                <Text style={{color: "#192A56",  fontWeight: "bold", fontSize: 20}}>
                  {this.state.cityName} {this.state.country}
                </Text>
                <Text style={{color: "#1287A5",  fontWeight: "bold"}}>
                  {this.state.mainWeather}
                </Text>
                <Text style={{color: "#8B78E6",  fontWeight: "bold"}}>
                  {this.state.description}
                </Text>
              </View>
            
              <View>
                <Image style={[styles.image, {flex: 5}]} source={{uri: this.state.iconUrl === "" ? "http://openweathermap.org/img/wn/09d@2x.png" : this.state.iconUrl}}/>
              </View>
            </View>
           
          </Body>
        </CardItem>
      </Card>
      <Button style={styles.button} onPress={()=> {
        this.props.navigation.goBack()
      }}>
<Text style={styles.buttonText}>Back</Text>
</Button>
    </Content>
  </Container>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:100,
    height: 100

  },
  button: {
    justifyContent: "center",
    width:"50%",
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "#1287A5"
    
    
},
buttonText: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "bold"

},
});
