import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <View style = {styles.container}>
      <Text>Contact</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({  container: {
  flex: 1,
  backgroundColor: '#334155',
  alignItems: 'center',
  justifyContent: 'center',
},})