import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//ROTAS
//import navegation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions } from "@react-navigation/native";

//import screens
import HomeScreen from "./screens/Home";
import PdfScreen from "./screens/PdfScreen";
import AudioScreen from "./screens/Audio";
import VideoScreen from "./screens/Videos";

import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer style={styles.nave}>
      <StatusBar barStyle="light-content"/>
      {/*Configs tab */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveBackgroundColor: "#fff",
          tabBarInactiveBackgroundColor: "#000",

          animationEnable: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarActiveTintColor: "#B44D5B",
            tabBarInactiveTintColor: "#fff",

            tabBarIcon: ({ color, size }) => (
              <View>
                <LinearGradient
                  style={styles.iconTabRound}
                  colors={["#D500F9", "#4A1A48C"]}
                >
                  <Ionicons name="home" color={color} size={25} />
                </LinearGradient>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Os Luisiadas"
          component={PdfScreen}
          options={{
            tabBarActiveTintColor: "#5653d4",
            tabBarInactiveTintColor: "#fff",

            tabBarIcon: ({ color, size }) => (
              <View>
                <LinearGradient
                  style={styles.iconTabRound}
                  colors={["#D500F9", "#4A1A48C"]}
                >
                  <Ionicons name="book" color={color} size={25} />
                </LinearGradient>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="A arte da guerra"
          component={AudioScreen}
          options={{
            tabBarActiveTintColor: "#30638E",
            tabBarInactiveTintColor: "#fff",

            tabBarIcon: ({ color, size }) => (
              <View>
                <LinearGradient
                  style={styles.iconTabRound}
                  colors={["#D500F9", "#4A1A48C"]}
                >
                  <Ionicons name="headset" color={color} size={25} />
                </LinearGradient>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Parkor in Greece"
          component={VideoScreen}
          options={{
            tabBarActiveTintColor: "#00798C",
            tabBarInactiveTintColor: "#fff",
         

            tabBarIcon: ({ color, size }) => (
              <View style={styles.view}>
                <LinearGradient
                  style={styles.iconTabRound}
                  colors={["#D500F9", "#4A1A48C"]}
                >
                  <Ionicons name="videocam" color={color} size={25}/>
                </LinearGradient>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DA4167",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  nave: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#fff",
    shadowOffset: { width: 20, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
 
});
