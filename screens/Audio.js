import React from 'react';
import { 
    Text, 
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import Slider from '@react-native-community/slider';

import db from '../content'

import { Audio } from 'expo-av';

/*const setupPlayer = async()=> {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(db)
}

const togglePlayback = async(playbackState) =>{
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if(currentTrack != null){
    if(playbackState == StaticRange.Paused){
      await TrackPlayer.play();
    } else{
        await TrackPlayer.pause();
    }
  }
} */

export function AudioScreen() {
   // const playbackState = usePlaybackState();
    
  /* playSound = async() =>{
       await Audio.Sound.createAsync(
      {
        uri:"https://github.com/App2Sales/mobile-challenge/raw/master/a-arte-da-guerra.mp3",
      },
     
      {shouldPlay: true}
    );

  };*/

  return (
    <View style={styles.container}>
   
    <View style={styles.containertitle}>
      <Text style={styles.textApp}>Sun Tzu</Text>
      <Text style={styles.text}>A ARTE da Guerra</Text>
    </View>
      {/*image */}
    <View style={[styles.imageContainer, styles.elevation]}>
      <Image 
        source={require('../assets/arte_guerra.png')}
        style = {styles.audioImg}
      />
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
        padding:0,
        margin:0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#30638E',
        
    },
  
    containertitle: {
      top:20,
      marginBottom:15,
      justifyContent: "center",
      alignItems: "center",
    },

    text:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 1.5,
        marginBottom: 20,
    },
    textApp: {
      color: "#ffcdb2",
      fontWeight: "bold",
      fontSize: 18,
      letterSpacing: 1.5,
    },
    imageContainer: {
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

  export default AudioScreen;