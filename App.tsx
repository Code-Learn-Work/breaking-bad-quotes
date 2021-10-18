import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";

const randomQuote = require("./utils/getRandomQuote");
const bbImage = require("./assets/breaking-bad.jpeg");
import Constants from "expo-constants";

const wait = (timeOut: Number) => {
  return new Promise((resolve: Function) => {
    setTimeout(resolve, timeOut);
  });
};

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [quote, setQuote] = React.useState({
    quote: "Better call Saul!",
    author: "Saul Goodman",
  });

  const refreshOnClick = () => {
    alert('Floating')
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    let getRandom = randomQuote();
    setQuote(getRandom);
    wait(1000).then(() => setRefreshing(false));
  }, []); 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Image source={bbImage} style={styles.bbImg} />
        <Text style={styles.textMainStyle}>{quote.quote}</Text>
        <Text style={styles.authorTextStyle}>{quote.author}</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  textMainStyle: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  authorTextStyle: { fontSize: 16, color: "darkgrey", marginTop: 20 },
  bbImg: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
