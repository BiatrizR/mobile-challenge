import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import * as OpenAnything from "react-native-openanything";


//api
import api from '../services/data/Api'
import Content from "../services/component/Content";

  

export default class PdfScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        dataSource: [],
      }
  }
  async componentDidMount() {
    const response =  await api.get('/content')
        this.setState({
            isLoading: false,
            dataSource: response.data
        });
  } 

  render() {
   /* if (this.state.isLoading)
     {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } 
    else 
    { */
    /* let content = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.item}>
            <View>{val.pdf}</View>
          </View>
        );
      });*/

      return (

        
        <View style={styles.container}>

         
      <View style={styles.containertitle}>
            <Text style={styles.text}>Os Lusíadas</Text>

            <Text style={styles.textApp}>de Luís de Camões</Text>
          </View>

          <View style={styles.containerButton}></View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => OpenAnything.Pdf("https://github.com/App2Sales/mobile-challenge/raw/master/os-lusiadas.pdf")}
          >
            <Text style={styles.textbtn}> Abrir PDF </Text>
          </TouchableOpacity>




          <TouchableOpacity
            style={styles.button}
              data ={this.state.dataSource}
              keyExtractor={item => item.id}
              renderItem={({item}) => <Content data={item.pdf}/>}
            onPress={() => OpenAnything.Pdf(item.pdf)}
          >
            <Text style={styles.textbtn}> Ler aqui </Text>
      </TouchableOpacity> 
        </View>
      );
    }
  //}
}

//----estilização do componente---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653d4",
  },
  containertitle: {
    top: 0,
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B44D5B",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    letterSpacing: 1.5,
    marginBottom: 20,
  },

  textApp: {
    color: "#ffcdb2",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1.5,
  },

  textbtn: {
    color: "#fff",
    margin: 20,
    fontSize: 15,
    fontWeight: "bold",
  },

  button: {
    width: 200,
    height: 70,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#000",
  },
  item: {
    flex: 1,
  },
});
