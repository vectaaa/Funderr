import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'


const CustomButton = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </Pressable>
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
    },
    text: {
     color:'white',
     fontWeight: 'bold'
    }
});

export default CustomButton