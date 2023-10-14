import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { HTML, CSS, JS, REACT, CPP, JAVA, CSHARP, PYTHON, WORD, EXCEL, POWERPOINT } from "../assets/index";

const Skills = () => {
  const DATA = [
    {image: HTML, key: '1'},
    {image: CSS, key: '2'},
    {image: JS, key: '3'},
    {image: REACT, key: '4'},
    {image: CPP, key: '5'},
    {image: JAVA, key: '6'},
    {image: CSHARP, key: '7'},
    {image: PYTHON, key: '8'},
    {image: WORD, key: '9'},
    {image: EXCEL, key: '10'},
    {image: POWERPOINT, key: '11'},
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text>Skills</Text>
      </View>
      <View>
        <FlatList
        data={DATA}
        horizontal={true}
        renderItem={({ item }) => (
          <View>
            <Image style = {{height: 96, width: 96}} source={item.image} />
          </View>
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
    backgroundColor: "#334155",
    alignItems: "center",
    justifyContent: "center",
  },
});
