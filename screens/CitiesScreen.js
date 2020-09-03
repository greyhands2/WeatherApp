import React from 'react';
import {  StyleSheet, Text, View} from 'react-native';





export default class  CitiesScreen extends React.Component {
  
  
  static navigationOptions = {
      headerTitle: "Cities",
      
     
  };

  


 


 
  render(){
    return(
   <View style={styles.container}>
       <Text>hollaaaaaa</Text>

   </View>
    );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: "50%"
  },
  
});
