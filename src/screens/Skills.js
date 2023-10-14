import React from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import {
  HTML,
  CSS,
  JS,
  TAILWIND,
  REACT,
  JAVA,
  CPP,
  CSHARP,
  PYTHON,
  GIT,
} from "../assets/index";

const Skills = () => {
  const DATA = [
    { image: HTML, key: "1" },
    { image: CSS, key: "2" },
    { image: JS, key: "3" },
    { image: TAILWIND, key: "4" },
    { image: REACT, key: "5" },
    { image: JAVA, key: "6" },
    { image: CPP, key: "7" },
    { image: CSHARP, key: "8" },
    { image: PYTHON, key: "9" },
    { image: GIT, key: "10" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.title}>Skills</Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          horizontal={true}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          disableIntervalMomentum={true}
          pagingEnabled={true}
          decelerationRate={'fast'}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => {}} style={styles.item}>
              <Image style={{ 
                height: 360,
                width: 360 }} source={item.image} />
            </TouchableHighlight>
          )}
        />
      </View>
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1e293b",
  },
  textcontainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  title: {
    fontFamily: "monospace",
    fontSize: 32,
    fontWeight: 900,
    color: '#f1f5f9'
  },
  item: {
    backgroundColor: "#1e293b",
    padding: 9,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 3,
    underlayColor: "#334155",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
});
