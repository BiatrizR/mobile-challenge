import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    TouchableOpacity,
    Image, 
    Video
} from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import Slider from '@react-native-community/slider';
//import { VideoPlayer } from 'react-native-video-player';

export function VideoScreen() {
  return (
    <View style={styles.container}>

    <View style={styles.containertitle}>
      <Text style={styles.text}>Parkour</Text>
      <Text style={styles.textApp}>in Greece</Text>
    </View>

    <View style={[styles.videoContainer, styles.elevation]}>
     {/* <VideoPlayer
        video={{ uri: '' }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{ uri: '' }}
      />*/}
    </View>  
   

 {/*slider and duration */}
    <View >
       <Slider 
       style={styles.progressBar}
        value={10}
        minimumValue ={0}
        maximumValue={100}
        thumbTintColor="#ffcdb2"
        minimumTrackTintColor="#ffcdb2"
        maximumTrackTintColor='#fffff'
        onSlidingComplete={()=> {}}
       />
    </View>

      <View style={styles.progressLevlDuration}>
        <Text style={styles.progressLabel}>00:00</Text>
        <Text style={styles.progressLabel}>00:00</Text>
      </View>

      <View style={styles.musicControlsContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ios-play-circle" size={75} color="#ffcdb2" />

        </TouchableOpacity>

      </View>


    </View>
   
  );
}

//----estilização do componente---

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#00798C',
       

    },
  
    containertitle: {
      top:0,
      marginTop:20,
      marginBottom:10,
      justifyContent: "center",
      alignItems: "center",
    },

    text:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 22,
        letterSpacing: 1.5,
        marginBottom: 0,
    },
    textApp: {
      color: "#ffcdb2",
      fontWeight: "bold",
      fontSize: 20,
      letterSpacing: 1.5,
    },

    videoContainer: {
      width: 300,
      height: 432,
      marginBottom: 15,
      marginTop:0,
      alignItems:'center',
      justifyContent:'center',
    },

    audioImg:{
      width:'100%',
      height:'100%',
      borderRadius:15,
    },

    elevation:{
      elevation: 20,
      shadowColor: "#fff",
      shadowOffset:{width:10, height:10},
      shadowOpacity: 0.2,
      shadowRadius: 8,
    },

    progressBar:{
      width: 350,
      height: 40,
      margimTop: 0,
      marginBottom:0,
      flexDirection:'row',
    },

    progressLevlDuration:{
      width:340,
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    progressLabel: {
      color:'#fff',
      fontSize: 12,
      fontWeight:'400'
    },
    musicControlsContainer:{
      alignItems:'center',
      marginTop:0,
      padding:0,
    }
  });

  export default VideoScreen;