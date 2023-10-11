import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Placeholder } from "../assets/images";

const Skills = () => {
  // const skills = [
  //   {image: Placeholder, key:'1'},
  //   {image: Placeholder, key:'2'},
  // ]

  return (
    <View style={styles.container}>
        <Image 
        source={Placeholder}
        style={{width: 200, height: 200}}
        />
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
