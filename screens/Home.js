import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

//fazer botões de navegação animados/depois
export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containertitle}>
        <Text style={styles.text}>Welcome to </Text>

        <Text style={styles.textApp}>app2sales mobile-Challenge</Text>
      </View>

      <View style={styles.containerButton}></View>
     <TouchableOpacity style={styles.button}>
        <Text style={styles.textbtn}> PDF </Text>

       </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbtn}> Audio </Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
      <Text style={styles.textbtn}> Video </Text>  

        </TouchableOpacity>
    </View>
  );
}

//----estilização do componente---

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:0,
    padding:0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B44D5B",
  },
  containertitle: {
    top:0,
    marginBottom:80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B44D5B",
  },

  containerButton: {
   
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B44D5B",
    justifyContent: 'space-evenly',
    flexDirection:'column',
  },

  text: {
    color: "#fff",
    fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1.5,
    marginBottom: 20,
  },

  textApp: {
    color: "#ffcdb2",
    fontWeight: "bold",
    fontSize: 22,
    letterSpacing: 1.5,
  },

  textbtn:{
    color: '#fff',
    margin:20, 
    fontSize:15,
    fontWeight:'bold'
  },

  button:{
    width:200,
    height:70,
    margin:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    backgroundColor: "#000",

  }, 




});

export default HomeScreen;
