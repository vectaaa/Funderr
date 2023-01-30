import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const CustomButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  )
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#DC2D2D',
        width: '70%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    }
});

export default CustomButton