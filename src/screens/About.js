import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style = {styles.container}>
      <Text>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({  container: {
  flex: 1,
  backgroundColor: '#1e293b',
  alignItems: 'center',
  justifyContent: 'center',
},})