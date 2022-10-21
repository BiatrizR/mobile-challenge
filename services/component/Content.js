import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';


export default class Content extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text >{this.props.data.pdf}</Text>
            </View>
        )
    }

}

//----estilização do componente---

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
     
    },

});