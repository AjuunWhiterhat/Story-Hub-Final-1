import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Story Hub</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'pink',
  },
  text:{
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:30
  }
});

export default AppHeader;